import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

/* For My Carpools Page */
// FETCH_USER_CARPOOLS_REQUEST
// FETCH_USER_CARPOOLS_SUCCESS
// FETCH_USER_CARPOOLS_ERROR
// fetchUserCarpools

/* For expanded view */
// FETCH_ONE_CARPOOL_REQUEST
// FETCH_ONE_CARPOOL_SUCCESS
// FETCH_ONE_CARPOOL_ERROR
// fetchOneCarpool

/* For Find Carpools Page */
// CARPOOL_PROXIMITY_SEARCH_REQUEST
// CARPOOL_PROXIMITY_SEARCH_SUCCESS
// CARPOOL_PROXIMITY_SEARCH_ERROR
// fetchNearbyCarpools

/* Editable Carpools Fields by HOST */
// UPDATE_CARPOOL_REQUEST
// UPDATE_CARPOOL_SUCCESS
// UPDATE_CARPOOL_ERROR
// updateCarpool

/* User clicking "Request To Join" button */
// REQUEST_CARPOOL_INVITE_REQUEST
// REQUEST_CARPOOL_INVITE_SUCCESS
// REQUEST_CARPOOL_INVITE_ERROR
// requestCarpoolInvite

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
