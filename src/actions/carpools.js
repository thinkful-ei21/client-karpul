import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// FETCH_CARPOOLS_REQUEST
// FETCH_CARPOOLS_SUCCESS
// FETCH_CARPOOLS_ERROR
// fetchCarpools

// FETCH_ONE_CARPOOL_REQUEST
// FETCH_ONE_CARPOOL_SUCCESS
// FETCH_ONE_CARPOOL_ERROR
// fetchOneCarpool

// HOST ONLY ACTIONS //
// UPDATE_CARPOOL_REQUEST
// UPDATE_CARPOOL_SUCCESS
// UPDATE_CARPOOL_ERROR
// updateCarpool

export const createNewCarpool = carpool => dispatch => {
    console.log(carpool)
    return fetch(`${API_BASE_URL}/carpools`, { // confirm endpoint for carpool creation
        method: 'POST',
        headers: {
            'content-type': 'application/json'
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
