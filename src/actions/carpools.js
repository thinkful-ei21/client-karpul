import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import {grabQueryGeocode} from './mapbox';

/* For My Carpools Page */
export const FETCH_USER_CARPOOLS_REQUEST = 'FETCH_USER_CARPOOLS_REQUEST';
export const fetchUserCarpoolsRequest = () => ({
    type: FETCH_USER_CARPOOLS_REQUEST
})

export const FETCH_USER_CARPOOLS_SUCCESS = 'FETCH_USER_CARPOOLS_SUCCESS';
export const fetchUserCarpoolsSuccess = carpools => ({
    type: FETCH_USER_CARPOOLS_SUCCESS,
    carpools
})

export const FETCH_USER_CARPOOLS_ERROR = 'FETCH_USER_CARPOOLS_ERROR';
export const fetchUserCarpoolsError = err => ({
    type: FETCH_USER_CARPOOLS_ERROR,
    err
})

export const fetchUserCarpools = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchOneCarpoolRequest());
    fetch(`${API_BASE_URL}/carpools`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(carpools => dispatch(fetchUserCarpoolsSuccess(carpools)))
    .catch(err => {
        dispatch(fetchUserCarpoolsError(err))
    })
}

/* For Find Carpools Page */
export const CARPOOL_PROXIMITY_SEARCH_REQUEST = 'CARPOOL_PROXIMITY_SEARCH_REQUEST';
export const carpoolProximitySearchRequest = () => ({
    type: CARPOOL_PROXIMITY_SEARCH_REQUEST
})

export const CARPOOL_PROXIMITY_SEARCH_SUCCESS = 'CARPOOL_PROXIMITY_SEARCH_SUCCESS';
export const carpoolProximitySearchSuccess = carpools => ({
    type: CARPOOL_PROXIMITY_SEARCH_SUCCESS,
    carpools
})

export const CARPOOL_PROXIMITY_SEARCH_ERROR = 'CARPOOL_PROXIMITY_SEARCH_ERROR';
export const carpoolProximitySearchError = err => ({
    type: CARPOOL_PROXIMITY_SEARCH_ERROR,
    err
})

export const fetchNearbyCarpools = values => (dispatch, getState) => {
    const authToken = getState().auth.authToken;    
    dispatch(carpoolProximitySearchRequest());
    return fetch(`${API_BASE_URL}/findCarpool?address=${values.proximitySearch}&days=${values.days}&from=${values.fromTime}&to=${values.toTime}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(carpools => dispatch(carpoolProximitySearchSuccess(carpools)))
        // .then(geocode => grabQueryGeocode(geocode))
        .catch(err => {
            dispatch(carpoolProximitySearchError(err))
        })
}

/* For expanded view */
export const FETCH_ONE_CARPOOL_REQUEST = 'FETCH_ONE_CARPOOL_REQUEST';
export const fetchOneCarpoolRequest = () => ({
    type: FETCH_ONE_CARPOOL_REQUEST
})

export const FETCH_ONE_CARPOOL_SUCCESS = 'FETCH_ONE_CARPOOL_SUCCESS';
export const fetchOneCarpoolSuccess = carpool => ({
    type: FETCH_ONE_CARPOOL_SUCCESS,
    carpool
})

export const FETCH_ONE_CARPOOL_ERROR = 'FETCH_ONE_CARPOOL_ERROR';
export const fetchOneCarpoolError = err => ({
    type: FETCH_ONE_CARPOOL_ERROR,
    err
})

export const fetchOneCarpool = () => dispatch => {

}

/* Editable Carpools Fields by HOST */
export const UPDATE_CARPOOL_REQUEST = 'UPDATE_CARPOOL_REQUEST';
export const updateCarpoolRequest = carpool => ({
    type: UPDATE_CARPOOL_REQUEST,
    carpool
})

export const UPDATE_CARPOOL_SUCCESS = 'UPDATE_CARPOOL_SUCCESS';
export const updateCarpoolSuccess = () => ({
    type: updateCarpoolSuccess
})

export const UPDATE_CARPOOL_ERROR = 'UPDATE_CARPOOL_ERROR';
export const updateCarpoolError = err => ({
    type: UPDATE_CARPOOL_ERROR,
    err
})

export const updateCarpool = () => dispatch => {

}

/* User Join Carpool */
export const JOIN_CARPOOL_REQUEST = 'JOIN_CARPOOL_REQUEST';
export const joinCarpoolRequest = () => ({
    type: JOIN_CARPOOL_REQUEST
})

export const JOIN_CARPOOL_SUCCESS = 'JOIN_CARPOOL_SUCCESS';
export const joinCarpoolSuccess = () => ({
    type: JOIN_CARPOOL_SUCCESS
})

export const JOIN_CARPOOL_ERROR = 'JOIN_CARPOOL_ERROR';
export const joinCarpoolError = err => ({
    type: JOIN_CARPOOL_ERROR,
    err
})

export const joinCarpool = carpoolId => (dispatch, getState) => {
    console.log(carpoolId);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/carpools`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({carpoolId: carpoolId})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => fetchUserCarpools())
        .catch(err => {
            dispatch(joinCarpoolError(err))
        })
}

/* User leaving carpool */
export const LEAVE_CARPOOL_REQUEST = 'LEAVE_CARPOOL_REQUEST';
export const leaveCarpoolRequest = () => ({
    type: LEAVE_CARPOOL_REQUEST
})

export const LEAVE_CARPOOL_SUCCESS = 'LEAVE_CARPOOL_SUCCESS';
export const leaveCarpoolSuccess = () => ({
    type: LEAVE_CARPOOL_SUCCESS
})

export const LEAVE_CARPOOL_ERROR = 'LEAVE_CARPOOL_ERROR';
export const leaveCarpoolError = err => ({
    type: LEAVE_CARPOOL_ERROR,
    err
})

export const leaveCarpool = carpoolId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/carpools/leave-carpool`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({carpoolId: carpoolId})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => fetchUserCarpools())
    .catch(err => {
        dispatch(leaveCarpoolError(err))
    })
}

/* Host deleting carpool */
export const DELETE_CARPOOL_REQUEST = 'DELETE_CARPOOL_REQUEST';
export const deleteCarpoolRequest = () => ({
    type: DELETE_CARPOOL_REQUEST
})

export const DELETE_CARPOOL_SUCCESS = 'DELETE_CARPOOL_SUCCESS';
export const deleteCarpoolSuccess = () => ({
    type: DELETE_CARPOOL_SUCCESS
})

export const DELETE_CARPOOL_ERROR = 'DELETE_CARPOOL_ERROR';
export const deleteCarpoolError = err => ({
    type: DELETE_CARPOOL_ERROR,
    err
})

export const deleteCarpool = carpoolId => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/carpools`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({carpoolId: carpoolId})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => fetchUserCarpools())
    .catch(err => {
        dispatch(deleteCarpoolError(err))
    })
}

export const createNewCarpool = carpool => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/carpools`, { // confirm endpoint for carpool creation
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(carpool)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
