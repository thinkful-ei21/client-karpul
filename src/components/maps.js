import React, {Component} from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import {connect} from 'react-redux';
///i will place this in a env file or something, i just wanted to give you guys the key first so you know it works
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJyaWFuNDYzIiwiYSI6ImNqbDQxYzd6YTI3OTMzdXBnOTJlNGxuaWIifQ.dfN-ws3FQ17D47nnLzovSw';

export class Maps extends Component {
  state = {
    viewport: {
      width: this.props.mapbox.width,
      height: this.props.mapbox.height,
      longitude: this.props.mapbox.longitude,
      latitude: this.props.mapbox.latitude,
      zoom: this.props.mapbox.zoom
    }
  }

componentDidMount(){

}

render(){

  let allMarkers = [];
  if (this.props.carpools) {
    this.props.carpools.map(carpool => {
      allMarkers.push(carpool.endAddress.location.coordinates);
    })
  }

  let pins = allMarkers.map((mark, index) => {
    return (
      <li key={index} onClick={(e) => this.handleClick(e)}>
        <Marker className="markers" longitude={mark[0]} latitude={mark[1]}>
          {index + 1}
        </Marker>
      </li>
    )
  })

  console.log(allMarkers);

  return (
    <div className="map">
    <ReactMapGL
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      > <ul>
        {pins}
      </ul></ReactMapGL>

    </div>
  );
}
}

const mapStateToProps = state => ({
  carpools: state.carpools.nearbyCarpools,
  mapbox: state.mapbox
})

export default connect(mapStateToProps)(Maps);
