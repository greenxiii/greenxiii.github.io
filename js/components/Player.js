import React from 'react';
import {connect} from 'react-redux';
import store from "../store/store";
import { SPRITE_WIDTH, SPRITE_HEIGHT, MAP_WIDTH, MAP_HEIGHT, GRAVITY } from "../constants";
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
        return [oldPos[0] - SPRITE_WIDTH, store.getState().player.velocity * SPRITE_HEIGHT]
      case 'right':
        return [oldPos[0] + SPRITE_WIDTH, store.getState().player.velocity * SPRITE_HEIGHT]
      case 'up':
        return [oldPos[0], oldPos[1] - SPRITE_HEIGHT]
      case 'gravity':
        return [oldPos[0], store.getState().player.velocity * SPRITE_HEIGHT]
      default:
        return oldPos
    }
  }

  observeBoundaries(oldPos, newPos) {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_WIDTH) &&
           (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_HEIGHT)
  }

  observeImpossible(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const x = newPos[0] / SPRITE_WIDTH;
    const y = newPos[1] / SPRITE_HEIGHT;
    const nextTile = tiles[y][x];
    return nextTile < 5;
  }

  attemptMove(direction) {
    const oldPos = store.getState().player.position;
    let newPos = this.getNewPosition(direction);
    if (this.observeBoundaries(oldPos, newPos) && this.observeImpossible(oldPos, newPos)) {
      let oldVal = store.getState().player.velocity;
      if ((oldVal + GRAVITY) * SPRITE_HEIGHT <= (MAP_HEIGHT - SPRITE_HEIGHT) && direction === 'gravity') {
        store.dispatch({
          type: 'UPDATE_VELOCITY',
          payload: {
            velocity: oldVal + GRAVITY
          }
        });
        newPos = this.getNewPosition(direction);
        this.dispatchMove(newPos);
      } else if (direction !== 'gravity') {
        store.dispatch({
          type: 'UPDATE_VELOCITY',
          payload: {
            velocity: 0
          }
        });
        this.dispatchMove(newPos);
      }
    }
  }

  dispatchMove(newPos) {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos
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
        this.attemptMove('down');
        break;
      case 38:
        this.attemptMove('up');
        break;
      case 39:
        this.attemptMove('right');
        break;
      case 37:
        this.attemptMove('left');
        break;
    }
    // dispatch({ type: 'MOOVE' });
  }

  render() {
    this.attemptMove('gravity');
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
