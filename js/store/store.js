import {createStore, combineReducers} from 'redux';
import playerReducer from './player/reducer';

const rootReducer = combineReducers({
  player: playerReducer
});

const store = createStore(
  rootReducer
);

export default store;
