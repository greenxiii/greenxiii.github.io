import { combineReducers } from 'redux';
import playerReducer from './player';
import globalReducer from './global';

const rootReducer = combineReducers({
  player: playerReducer,
  global: globalReducer,
});

export default rootReducer;
