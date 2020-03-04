import React from 'react';
import Map from './Map';
import Player from './Player';
import { MAP_WIDTH, MAP_HEIGHT } from '../constants';
import {tiles} from '../maps/1';
import store from "../store/store";

export default class Game extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
  }
  scrollHandler(e) {
  }
  keyupHandler(e) {
  }
  changeSection(section) {
    this.setState({currentSection: section});
  }
  render() {
    store.dispatch({type: 'ADD_TILES', payload: {tiles}})
    return (
      <div
        id="game"
        style={{
          position: 'relative',
          width: `${MAP_WIDTH}px`,
          height: `${MAP_HEIGHT}px`,
          margin: '10px auto',
        }}
      >
        <Map />
        <Player />
      </div>
    );
  }
}