import { combineReducers } from 'redux';
import obstaclesReducer from './obstacles';
import playerReducer from './player';
import mapReducer from './map';
import globalReducer from './global';

const rootReducer = combineReducers({
  obstacles: obstaclesReducer,
  player: playerReducer,
  map: mapReducer,
  global: globalReducer,
});

export default rootReducer;
