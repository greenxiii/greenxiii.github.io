const initialState = {
  tiles: [],
  score: [],
  isGameOver: false,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_TILES':
      return {
        ...action.payload,
        score: state.score,
        isGameOver: state.isGameOver,
      };
    case 'SET_SCORE':
      return {
        ...action.payload,
        tiles: state.tiles,
        isGameOver: state.isGameOver,
      };
    case 'SET_IS_GAME_OVER':
      return {
        ...action.payload,
        tiles: state.tiles,
        score: state.score
      };
  }
}

export default mapReducer;
