const initialState = {
  position: [0, 0],
  playerState: 'run',
  velocity: 0,
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
      };
    case 'UPDATE_VELOCITY':
      return {
        ...action.payload,
        playerState: initialState.playerState,
        position: state.position,
      };
  }
}

export default playerReducer;
