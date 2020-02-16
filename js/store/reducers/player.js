const initialState = {
  position: [0, 0],
  playerState: ''
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'MOVE_PLAYER':
      return {
        ...action.payload,
        playerState: initialState.playerState,
      };
  }
}

export default playerReducer;
