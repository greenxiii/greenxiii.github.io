import { SPRITE_HEIGHT, MAP_HEIGHT } from "../../constants";

const initialState = {
  position: [300, 0],
  playerState: 'run',
  velocity: 0,
  jumpsInRow: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'MOVE_PLAYER':
      return {
        ...action.payload,
        playerState: initialState.playerState,
        velocity: state.velocity,
        jumpsInRow: state.jumpsInRow
      };
    case 'UPDATE_VELOCITY':
      const newY = Math.round(state.position[1] + action.payload.velocity);
      return {
        ...action.payload,
        playerState: initialState.playerState,
        position: [state.position[0], newY],
        jumpsInRow: (newY === MAP_HEIGHT - SPRITE_HEIGHT) ? 0 : state.jumpsInRow
      };
    case 'JUMP':
      return {
        ...action.payload,
        playerState: initialState.playerState,
        position: [state.position[0], state.position[1] + action.payload.velocity],
      };
  }
}

export default playerReducer;
