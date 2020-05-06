import React from 'react';
import {connect} from 'react-redux';
import store from "../store/store";
import { SPRITE_WIDTH, SPRITE_HEIGHT, MAP_WIDTH, MAP_HEIGHT, GRAVITY, JUMP_FORCE } from "../constants";

class Obstacles extends React.Component {
  constructor (props) {
    super(props);
    this.updateTimeInterval = null;
    this.obstacleSpeeds = [50, 40, 30, 20, 18, 15, 13, 12, 11, 10];
    this.level = 0;
    this.scoreToNextLevel = 10;
    this.keyDown = this.keyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
    console.log(222222)
    this.startGame();
  }

  startGame() {
    this.level = 0;
    store.dispatch({
      type: 'START_NEW',
    });
    store.dispatch({
      type: 'SET_SCORE',
      payload: {
        score: []
      }
    });
    store.dispatch({
      type: 'SET_IS_GAME_OVER',
      payload: {
        isGameOver: false
      }
    });
    this.update(true);
    let iterator = 0;
    
    let distanceBB = this.getNewDistanceBB();
    this.updateTimeInterval = setInterval(() => {
      if (iterator >= distanceBB) {
        this.update(true);
        iterator = 0;
        distanceBB = this.getNewDistanceBB();
      } else {
        this.update();
        iterator++;
      }
    }, this.obstacleSpeeds[this.level]);
  }

  getNewDistanceBB() {
    const min = (this.level + 1) * 5 + 30;
    const max = min + 35;
    return min + Math.floor((max - min) * Math.random());
  }

  update(createObstacle) {
    this.moveObstacles();
    if (createObstacle) {
      this.addObstacle();
    }
    if (this.isHit()) {
      this.gameOver();
    } else {
      this.checkScore();
    }
  }
  
  isHit() {
    const playerPosition = this.props.player.position;
    let foundIndex = this.props.obstacles.items.findIndex(ob => {
      return (
          (playerPosition[0] >= ob.position && playerPosition[0] <= ob.position + ob.width) ||
          (playerPosition[0] + SPRITE_WIDTH >= ob.position && playerPosition[0] + SPRITE_WIDTH <= ob.position + ob.width)
        ) && playerPosition[1] + SPRITE_HEIGHT >= MAP_HEIGHT - ob.height;
    });

    return foundIndex !== -1;
  }

  checkScore() {
    const playerPosition = this.props.player.position;
    const foundIndex = this.props.obstacles.items.findIndex(ob => {
      return  playerPosition[0] >= ob.position + ob.width;
    });
    const scoreArr = this.props.currentMap.score;
    if (foundIndex !== -1 && scoreArr.indexOf(this.props.obstacles.items[foundIndex].id) === -1) {
      scoreArr.push(this.props.obstacles.items[foundIndex].id);
      store.dispatch({
        type: 'SET_SCORE',
        payload: {
          score: scoreArr
        }
      });
      if (scoreArr.length % this.scoreToNextLevel === 0 && this.level <= this.obstacleSpeeds.length - 1) {
        this.nextLevel();
      }
    }
  }

  nextLevel() {
    this.level++;
    clearInterval(this.updateTimeInterval);
    let iterator = 0;
    let distanceBB = this.getNewDistanceBB();
    this.updateTimeInterval = setInterval(() => {
      if (iterator >= distanceBB) {
        this.update(true);
        iterator = 0;
        distanceBB = this.getNewDistanceBB();
      } else {
        this.update();
        iterator++;
      }
    }, this.obstacleSpeeds[this.level]);
  }

  gameOver() {
    clearInterval(this.updateTimeInterval);
    store.dispatch({
      type: 'SET_IS_GAME_OVER',
      payload: {
        isGameOver: true
      }
    });
  }

  keyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
    if (e.keyCode === 13 && this.props.currentMap.isGameOver) {
      this.startGame();
    }
  }

  moveObstacles() {
    store.dispatch({
      type: 'MOVE_ALL_OBSTACLES',
    });
  }

  addObstacle() {
    const typeRnd = Math.floor((2 - 0) * Math.random());
    const widthRnd = SPRITE_WIDTH + Math.floor((3 * SPRITE_WIDTH - SPRITE_WIDTH) * Math.random());
    const heightRnd = SPRITE_HEIGHT/2 + Math.floor((2*SPRITE_HEIGHT - SPRITE_HEIGHT/2) * Math.random());
    store.dispatch({
      type: 'ADD_OBSTACLE',
      payload: {
        id: new Date().getTime(),
        width: widthRnd,
        height: heightRnd,
        type: typeRnd
      }
    });
  }
  
  render() {
    return (
      this.props.obstacles.items.map((obstacle, index) => 
        <div
          key={`obstacle-${index}`}
          className={`obstacle ${obstacle.type}`}
          style={{
            top: `${MAP_HEIGHT - obstacle.height}px`,
            left: `${obstacle.position}px`,
            position: 'absolute',
            width: `${obstacle.width}px`,
            height: `${obstacle.height}px`,
          }}
        />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    obstacles: state.obstacles,
    player: state.player,
    currentMap: state.map
  };
}

export default connect(mapStateToProps)(Obstacles);
