import React, {Component} from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import {connect} from 'react-redux';
import {showModal} from '../actions/modals';
import './map.css';
///i will place this in a env file or something, i just wanted to give you guys the key first so you know it works
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJyaWFuNDYzIiwiYSI6ImNqbDQxYzd6YTI3OTMzdXBnOTJlNGxuaWIifQ.dfN-ws3FQ17D47nnLzovSw';

export class Maps extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         width: 1024,
//         height: 600,
//         latitude: 45.52165,
//         longitude: -122.67685,
//         zoom: 12
//       }
//     }

//     const width = window.innerWidth;

//     if (width < 800) {
//       this.state = {
//         viewport: {
//           width: 600,
//           height: 300,
//           latitude: 45.52165,
//           longitude: -122.67685,
//           zoom: 12
//         }
//       }
//     }

//     if (width < 600) {
//       this.state = {
//         viewport: {
//           width: 300,
//           height: 200,
//           latitude: 45.52165,
//           longitude: -122.67685,
//           zoom: 12
//         }
//       }
//     }
//   }


// componentDidMount(){
//   // console.log(this.props.coordinates[0].longitude);
// }


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
  let allStartMarkers = [];
  if (this.props.carpools) {
    this.props.carpools.map(carpool => {
      allMarkers.push(carpool.endAddress.location.coordinates);
      allStartMarkers.push(carpool.startAddress.location.coordinates)
    })
  }

  let pins = allMarkers.map((mark, index) => {
    // console.log(this.props.carpools[index])
    return (
      <li key={index} onClick={() => {this.props.dispatch(showModal("find-carpool-modal", this.props.carpools[index]))}}>
        <Marker className="markers" longitude={mark[0]} latitude={mark[1]}>
          Click To Expand
        </Marker>
        <Marker className="startMarkers" longitude={allStartMarkers[index][0]} latitude={allStartMarkers[index][1]}>
          Start
        </Marker>
      </li>
    )
  })

  // console.log(allMarkers);

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
  carpools: state.carpools.nearbyCarpools.results,
  mapbox: state.mapbox
})

export default connect(mapStateToProps)(Maps);
