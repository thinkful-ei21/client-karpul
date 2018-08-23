import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
///i will place this in a env file or something, i just wanted to give you guys the key first so you know it works
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJyaWFuNDYzIiwiYSI6ImNqbDQxYzd6YTI3OTMzdXBnOTJlNGxuaWIifQ.dfN-ws3FQ17D47nnLzovSw';

export default class Maps extends Component {
  state = {
    viewport: {
      width: 500,
      height: 500,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
  }
}
render(){
  return (
    <div>
    <ReactMapGL
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
    </div>
  );
}
}
