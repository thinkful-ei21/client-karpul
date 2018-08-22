import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const PIC_REQUEST = 'PIC_REQUEST';
export const picRequest = () => ({
    type: PIC_REQUEST
});

export const PIC_SUCCESS = 'PIC_SUCCESS';
export const picSuccess = picUrl => ({
    type: PIC_SUCCESS,
    picUrl
});

export const PIC_ERROR = 'PIC_ERROR';
export const picError = error => ({
    type: PIC_ERROR,
    error
});

export const fetchPic = userId => dispatch => {
    dispatch(picRequest())
    return fetch(`${API_BASE_URL}/users/${userId}`)
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(picSuccess(data))})
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
}

export const registerUser = user => dispatch => {
    console.log(user);
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchPic(res._id)))
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
