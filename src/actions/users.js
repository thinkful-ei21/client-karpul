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

export const FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST';
export const fetchUserDataRequest = () => ({
    type: FETCH_USER_DATA_REQUEST
});

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = userData => ({
    type: FETCH_USER_DATA_SUCCESS,
    userData
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
    type: FETCH_ERROR,
    error
});

export const UPDATE_USER_DATA_REQUEST = 'UPDATE_USER_DATA_REQUEST';
export const updateUserDataRequest = () => ({
    type: UPDATE_USER_DATA_REQUEST
});

export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
export const updateUserDataSuccess = userData => ({
    type: UPDATE_USER_DATA_SUCCESS,
    userData
});

export const updateUserData = (userData) => dispatch => {
    dispatch(updateUserDataRequest())
    return fetch(`${API_BASE_URL}/users/userData/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(updateUserDataSuccess(data)))
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

export const fetchUserData = userId => dispatch => {
    dispatch(fetchUserDataRequest())
    return fetch(`${API_BASE_URL}/users/userData/${userId}`)
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchUserDataSuccess(data)))
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
