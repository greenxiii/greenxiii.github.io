const initialState = {
  items: [],
};

import { MAP_WIDTH, OBSTICLE_SPEED } from "../../constants";

const obstacleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'START_NEW':
      return initialState;
    case 'ADD_OBSTACLE':
      state.items.push({
        ...action.payload,
        position: MAP_WIDTH,
      });
      return state;
    case 'MOVE_ALL_OBSTACLES':
      const res = {};
      res.items = state.items.map(i => {
        return {
          ...i,
          position: i.position - OBSTICLE_SPEED
        }
      }).filter(i => i.position >= -i.width);
      return res;
  }
}

export default obstacleReducer;
