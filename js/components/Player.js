import React from 'react';
import {connect} from 'react-redux';
import store from "../store/store";
import { SPRITE_WIDTH, SPRITE_HEIGHT, MAP_WIDTH, MAP_HEIGHT} from "../constants";
// import { mooveLeft } from "../store/actions";
import PlayerSprite from '../../img/playerSprite.gif';

class Player extends React.Component {
  constructor (props) {
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case 'left':
        return [oldPos[0] - SPRITE_WIDTH, oldPos[1]]
      case 'right':
        return [oldPos[0] + SPRITE_WIDTH, oldPos[1]]
      case 'up':
        return [oldPos[0], oldPos[1] - SPRITE_HEIGHT]
      case 'down':
        return [oldPos[0], oldPos[1] + SPRITE_HEIGHT]
      default:
        break;
    }
  }

  observeBoundaries(oldPos, newPos) {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_WIDTH) &&
           (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_HEIGHT)
           ? newPos : oldPos
  }

  dispatchMove(direction) {
    const oldPos = store.getState().player.position;
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: this.observeBoundaries(oldPos, this.getNewPosition(direction))
      }
    })
  }

  keyDown(e) {
    if (
      e.keyCode === 40 ||
      e.keyCode === 38 ||
      e.keyCode === 39 ||
      e.keyCode === 37
    ) {
      e.preventDefault();
    }

    switch (e.keyCode) {
      case 40: 
        this.dispatchMove('down');
        break;
      case 38:
        this.dispatchMove('up');
        break;
      case 39:
        this.dispatchMove('right');
        break;
      case 37:
        this.dispatchMove('left');
        break;
    }
    // dispatch({ type: 'MOOVE' });
  }

  render() {
    return (
      <div
        id="player"
        className={this.props.playerState}
        style={{
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url('${PlayerSprite}')`,
          marginRight: '100px',
          position: 'absolute',
          width: `${SPRITE_WIDTH}px`,
          height: `${SPRITE_HEIGHT}px`,
        }}
      ></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

export default connect(mapStateToProps)(Player);
