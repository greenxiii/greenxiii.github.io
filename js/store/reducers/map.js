const initialState = {
  tiles: [], 
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'ADD_TILES':
      return {
        ...action.payload,
      };
  }
}

export default mapReducer;
