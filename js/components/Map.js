import React from 'react';
import {connect} from 'react-redux';

function getTileSprite(type) {
  switch (type) {
    case 0:
      return ''
    case 1:
      return '1'
    default:
      return '';
  }
  return 
}

function MapTile (props) {
  return <div className="map-tile">{getTileSprite(props.tile)}</div>
}

function MapRow(props) {
  return props.tiles.map(tile =>
    <div className="map-row">
      <MapTile tile={tile} />
    </div>
  )
}

function Map (props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
      }}
    >
      {
        props.tiles.map(row => <MapRow tiles={row} />)
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