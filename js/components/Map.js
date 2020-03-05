import React from 'react';
import {connect} from 'react-redux';
import {SPRITE_HEIGHT, SPRITE_WIDTH} from '../constants';

function getTileSprite(type) {
  switch (type) {
    case 0:
      return 'grass'
    case 5:
      return 'block'
    default:
      return '';
  }
}

function MapTile (props) {
  return <div
    className={`map-tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_HEIGHT,
      width: SPRITE_WIDTH
    }}
  />
}

function MapRow(props) {
  return <div className="map-row">
    {props.tiles.map((tile, index) =>
      <MapTile tile={tile} key={`tile-${index}`} />
    )}
  </div>
}

function Map (props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {
        props.tiles.map((row, index) => <MapRow tiles={row} key={`row-${index}`}  />)
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
} 
export default connect(mapStateToProps)(Map);