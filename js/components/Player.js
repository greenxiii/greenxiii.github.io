import React from 'react';
import { connect } from 'react-redux';
import { moove } from "../store/actions";
import PlayerSprite from '../../img/playerSprite.gif';

class Player extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
  }
  keyDown(e) {
    console.log('up', this.props);
    dispatch({ type: 'MOOVE' });
  }
  keyUp(e) {
    console.log('down');
    this.props.moove('right');
  }
  render() {
    console.log(this.state);
    return (
      <div
        id="player"
        className={this.props.playerState}
        style={{
          top: this.props.position[1],
          left: this.props.position[0],
          backgroundImage: `url('${PlayerSprite}')`,
          marginRight: '100px'
        }}
      ></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

export default connect(mapStateToProps)(Player);
