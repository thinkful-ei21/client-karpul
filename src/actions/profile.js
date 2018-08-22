import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const updateProfileInfo = updateProfileInfo => dispatch => {
    return fetch(`${API_BASE_URL}/updateProfileInfo`, { // confirm endpoint for updateProfileInfo
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateProfileInfo)
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
