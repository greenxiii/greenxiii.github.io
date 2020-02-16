import React from 'react';
import Map from './Map';
import Player from './Player';

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
    return (
      <div
        id="game"
        style={{
          position: 'relative',
          width: '800px',
          height: '500px',
          margin: '10px auto',
        }}
      >
        <Map />
        <Player />
      </div>
    );
  }
}