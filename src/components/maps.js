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
      latitude: 40.7577,
      longitude: -73.4376,
      zoom: 8
  }
}
componentDidMount(){
  console.log(this.props.coordinates[0].longitude);
}


render(){
////get rid of text align center for map
//////list of markers
///<li><Marker longitude={this.props.coordinates[0].longitude} latitude={40.7577} >here </Marker></li>
//<li><Marker longitude={this.props.coordinates[0].longitude} latitude={42.7577} >there </Marker></li>

const allMarkers = this.props.coordinates.map((marks, index) => (
    <li> <Marker longitude= {marks.longitude} latitude= {marks.latitude}>carpool {index} </Marker></li>
)
)
  return (
    <div className="map">
    <ReactMapGL
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      > <ul>
        {allMarkers}
      </ul></ReactMapGL>

    </div>
  );
}
}

const mapStateToProps = state => ({
  carpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(Maps);
