import { MOOVE } from "../actionTypes";

const initialState = {
  position: [0, 0],
  playerState: ''
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case MOOVE: {
      const { direction } = action.payload;
      return {
        ...state,
        playerState: direction,
      };
    }
  }
};

export default playerReducer;
