import React, {Component} from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import {connect} from 'react-redux';
///i will place this in a env file or something, i just wanted to give you guys the key first so you know it works
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJyaWFuNDYzIiwiYSI6ImNqbDQxYzd6YTI3OTMzdXBnOTJlNGxuaWIifQ.dfN-ws3FQ17D47nnLzovSw';

export class Maps extends Component {
  state = {
    viewport: {
      width: 1040,
      height: 800,
      latitude: 45.52165,
      longitude: -122.67685,
      // latitude: 0,
      // longitude: 0,
      zoom: 8
  }
}
componentDidMount(){
  console.log(this.props.coordinates[0].longitude);
}

handleClick(e) {
  console.log(e.target.value)
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
  carpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(Maps);
