import React, {Component} from 'react';
import ReactMapGL , {Marker} from 'react-map-gl';
import {connect} from 'react-redux';
import './map.css';
///i will place this in a env file or something, i just wanted to give you guys the key first so you know it works
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGJyaWFuNDYzIiwiYSI6ImNqbDQxYzd6YTI3OTMzdXBnOTJlNGxuaWIifQ.dfN-ws3FQ17D47nnLzovSw';

export class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1024,
        height: 600,
        latitude: 45.52165,
        longitude: -122.67685,
        // latitude: 0,
        // longitude: 0,
        zoom: 12
      }
    }
    const width = window.innerWidth;

    if (width < 800) {
      console.log(window.innerWidth)
      this.state = {
        viewport: {
          width: 600,
          height: 300,
          latitude: 45.52165,
          longitude: -122.67685,
          zoom: 12
        }
      }
    }

    if (width < 600) {
      console.log(window.innerWidth)
      this.state = {
        viewport: {
          width: 300,
          height: 200,
          latitude: 45.52165,
          longitude: -122.67685,
          zoom: 12
        }
      }
    }
  }


componentDidMount(){
  // console.log(this.props.coordinates[0].longitude);
  // window.addEventListener("resize", function() { 
    console.log(window.innerWidth)
    // const width = window.innerWidth;

    // if (width <= 800) {
    //   console.log('resizing map')
    //   this.setState({
    //     viewport: {
    //     width: 400,
    //     height: 300
    //     }
    //   })
    // }

      // else {
      //   this.state = {
      //     viewport: {
      //       width: 1024,
      //       height: 400,
      //       latitude: 45.52165,
      //       longitude: -122.67685,
      //       // latitude: 0,
      //       // longitude: 0,
      //       zoom: 8
      //   }
      // }
    // }
  // });


  //   // have min value, set ratio take % of screen set viewport to corresponding % 
  //   // if window.innerHeight ...
  //   switch(window.innerWidth) {
  //     // case ( this > 1280):
  //     //   return this.setState({
  //     //     viewport: {
  //     //     width: 1200,
  //     //     height: 500
  //     //     }
  //     //   })
  //     //   break;

  //     case ( this > 1280):
  //     this.setState(([...state], props) => {
  //       return {
  //         viewport: {
  //         width: 1200,
  //         height: 500
  //         }
  //       }
  //     })
  //     break;

  //     // case ( this > 768):
  //     // this.setState((...state, props) => {
  //     //     viewport: {
  //     //     width: 700,
  //     //     height: 300
  //     //     }
        
  //     //   })
  //     //   break;

  //     case ( this > 768):
  //     this.setState(([...state], props) => {
  //       return {
  //         viewport: {
  //         width: 700,
  //         height: 300
  //         }
  //       }
  //     })
  //     break;

  //     // case ( this > 640):
  //     // return this.setState({
  //     //     viewport: {
  //     //     width: 600,
  //     //     height: 300
  //     //     }
  //     //   })
  //     //   break;

  //     case ( this > 640):
  //     this.setState(([...state], props) => {
  //       return {
  //         viewport: {
  //         width: 600,
  //         height: 300
  //         }
  //       }
  //     })
  //     break;

  //     case ( this > 400):
  //     return this.setState({
  //         viewport: {
  //         width: 350,
  //         height: 300
  //         }
  //       })
  //       break;
  //     case ( this > 320):
  //     this.setState(([...state], props) => {
  //       return {
  //           viewport: {
  //           width: 300,
  //           height: 200
  //           }
  //         }
  //       })
  //       break;
  //   }
  //   return this.state;
  // });
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
  carpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(Maps);
