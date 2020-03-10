import React from 'react';
import {connect} from 'react-redux';
import store from "../store/store";
import { SPRITE_WIDTH, SPRITE_HEIGHT, MAP_WIDTH, MAP_HEIGHT, GRAVITY, JUMP_FORCE } from "../constants";
// import { mooveLeft } from "../store/actions";
import PlayerSprite from '../../img/playerSprite.png';

class Player extends React.Component {
  constructor (props) {
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
    setInterval(() => {
      this.attemptMove('gravity');
    }, 10);
  }

  getNewPosition(direction) {
    const oldPos = store.getState().player.position;
    switch (direction) {
      case 'left':
        return [oldPos[0] - 15, oldPos[1]]
      case 'right':
        return [oldPos[0] + 15, oldPos[1]]
      case 'jump':
        return [oldPos[0], oldPos[1] - SPRITE_HEIGHT]
      case 'gravity':
        return [oldPos[0], store.getState().player.velocity + oldPos[1]]
      default:
        return oldPos
    }
  }

  observeBoundaries(oldPos, newPos) {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_WIDTH) &&
           (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_HEIGHT)
  }
  attemptMove(type) {
    const oldPos = store.getState().player.position;
    if (type === 'jump' && (JUMP_FORCE + GRAVITY) + oldPos[1] > SPRITE_HEIGHT && store.getState().player.jumpsInRow < 2) {
      store.dispatch({
        type: 'JUMP',
        payload: {
          velocity: JUMP_FORCE + GRAVITY,
          jumpsInRow: store.getState().player.jumpsInRow + 1
        }
      });
    } else if (type === 'gravity') {
      let oldVelocity = store.getState().player.velocity;
      const newPos = [store.getState().player.position[0], (oldVelocity + GRAVITY) + oldPos[1]];
      if (
        newPos[1] <= (MAP_HEIGHT - SPRITE_HEIGHT) && 
        newPos[1] > 0
      ) {
        store.dispatch({
          type: 'UPDATE_VELOCITY',
          payload: {
            velocity: oldVelocity + GRAVITY,
          }
        });
      } else {
        store.dispatch({
          type: 'UPDATE_VELOCITY',
          payload: {
            velocity: 0,
          }
        });
      }
    } else if (type === 'right' || type === 'left') {
      let newPos = this.getNewPosition(type);
      if (this.observeBoundaries(oldPos, newPos)) {
        store.dispatch({
          type: 'MOVE_PLAYER',
          payload: {
            position: newPos
          }
        });
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
    if (e.repeat) return;
    if (
      e.keyCode === 40 ||
      e.keyCode === 38 ||
      e.keyCode === 32 ||
      e.keyCode === 39 ||
      e.keyCode === 37
    ) {
      e.preventDefault();
    }

    switch (e.keyCode) {
      case 40: 
        this.attemptMove('gravity');
        break;
      case 32:
      case 38:
        this.attemptMove('jump');
        break;
      case 39:
        this.attemptMove('right');
        break;
      case 37:
        this.attemptMove('left');
        break;
    }
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
