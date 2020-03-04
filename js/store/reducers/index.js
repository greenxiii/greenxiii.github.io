import { combineReducers } from 'redux';
import playerReducer from './player';
import mapReducer from './map';
import globalReducer from './global';

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  global: globalReducer,
});

export default rootReducer;
