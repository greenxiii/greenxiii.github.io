import React from 'react';
import Map from './Map';
import Player from './Player';
import Obstacles from './Obstacles';
import { MAP_WIDTH, MAP_HEIGHT } from '../constants';
import {tiles} from '../maps/1';
import store from "../store/store";
import { connect } from 'react-redux';

class Game extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    store.dispatch({ type: 'ADD_TILES', payload: { tiles } });
  }
  scrollHandler(e) {
  }
  keyupHandler(e) {
  }
  changeSection(section) {
    this.setState({currentSection: section});
  }
  render() {
    return (
      <div
        style={{
          width: `${MAP_WIDTH}px`,
          margin: '10px auto',
          position: 'relative',
        }}
      >
        <div
          id="game"
          className={this.props.currentMap.isGameOver?'game-over':''}
          style={{
            position: 'relative',
            width: `${MAP_WIDTH}px`,
            height: `${MAP_HEIGHT}px`,
            margin: '10px auto',
            overflow: 'hidden'
          }}
        >
          <Map />
          <Player />
          <Obstacles />
        </div>
        <span id="score">SCORE: {this.props.currentMap.score.length}</span>
        {
          this.props.currentMap.isGameOver
            ? <span id="restart-message">Press "Enter" to restart</span>
            : ''
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMap: state.map,
  }
}

export default connect(mapStateToProps)(Game);