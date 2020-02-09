import React from 'react';
import { connect } from 'react-redux';
import PlayerSprite from '../../img/playerSprite.gif';

class Player extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyupHandler);
  }
  keyupHandler(e) {
    console.log(123);
  }
  render() {
    return (
      <div
        id="player"
        style={{
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url('${PlayerSprite}')`,
          marginRight: '100px'
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(Player);
