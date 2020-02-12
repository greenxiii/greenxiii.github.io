import {createStore, combineReducers} from 'redux';
import playerReducer from './reducers/player';

const rootReducer = combineReducers({
  player: playerReducer
});

const store = createStore(
  rootReducer
);

export default store;
