import {
  GRAB_QUERY_GEOCODE
} from '../actions/mapbox';

const initialState = {
  width: 1040,
  height: 800,
  longitude: -97.65,
  latitude: 41.85,
  zoom: 3,
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case GRAB_QUERY_GEOCODE:
    return {
      ...state,
      longitude: action.geocode[0],
      latitude: action.geocode[1],
      zoom: 7
    }

    default:
    return state;

  }

}