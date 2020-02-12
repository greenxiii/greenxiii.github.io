import React from 'react';
import Player from './Player';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    
  }
  componentDidMount() {
    console.log(312)
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
      <div id="game">
        <Player />
      </div>
    );
  }
}