import {
  FETCH_USER_CARPOOLS_REQUEST,
  FETCH_USER_CARPOOLS_SUCCESS,
  FETCH_USER_CARPOOLS_ERROR,
  CARPOOL_PROXIMITY_SEARCH_REQUEST,
  CARPOOL_PROXIMITY_SEARCH_SUCCESS,
  CARPOOL_PROXIMITY_SEARCH_ERROR,
  FETCH_ONE_CARPOOL_REQUEST,
  FETCH_ONE_CARPOOL_SUCCESS,
  FETCH_ONE_CARPOOL_ERROR,
  UPDATE_CARPOOL_REQUEST,
  UPDATE_CARPOOL_SUCCESS,
  UPDATE_CARPOOL_ERROR,
  REQUEST_CARPOOL_INVITE_REQUEST,
  REQUEST_CARPOOL_INVITE_SUCCESS,
  REQUEST_CARPOOL_INVITE_ERROR
} from '../actions/carpools';

const intialState = {
  userCarpools: [],
  nearbyCarpools: [],
  selectedCarpool: {},
  pendingRequests: null,
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case FETCH_USER_CARPOOLS_REQUEST:
    return {
      ...state,
      loading: true
    }

    case FETCH_USER_CARPOOLS_SUCCESS:
    return {
      ...state,
      userCarpools: action.carpools,
      loading: false,
      error: null
    }

    case FETCH_USER_CARPOOLS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case CARPOOL_PROXIMITY_SEARCH_REQUEST:
    return {
      ...state,
      loading: true
    }

    case CARPOOL_PROXIMITY_SEARCH_SUCCESS:
    return {
      ...state,
      nearbyCarpools: action.carpools,
      loading: false,
      error: null
    }

    case CARPOOL_PROXIMITY_SEARCH_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case FETCH_ONE_CARPOOL_REQUEST:
    return {
      ...state,
      loading: true
    }

    case FETCH_ONE_CARPOOL_SUCCESS:
    return {
      ...state,
      selectedCarpool: action.carpool,
      loading: false,
      error: null
    }

    case FETCH_ONE_CARPOOL_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case UPDATE_CARPOOL_REQUEST:
    return {
      ...state,
      loading: true
    }

    case UPDATE_CARPOOL_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null
    }

    case UPDATE_CARPOOL_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    case REQUEST_CARPOOL_INVITE_REQUEST:
    return {
      ...state,
      loading: true
    }

    case REQUEST_CARPOOL_INVITE_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null
    }

    case REQUEST_CARPOOL_INVITE_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    }

    default:
    return state;

  }

}