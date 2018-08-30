import {API_BASE_URL} from '../config';

import {normalizeResponseErrors} from './utils';

export const FETCH_REQUEST_REQUEST = 'FETCH_REQUEST_REQUEST';
export const fetchRequestRequest = () => ({
  type: FETCH_REQUEST_REQUEST
})

export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const fetchRequestSuccess = () => ({
  type: FETCH_REQUEST_SUCCESS,
})

export const FETCH_REQUEST_ERROR = 'FETCH_REQUEST_ERROR';
export const fetchRequestError = () => ({
  type: FETCH_REQUEST_ERROR
})


export const requestRequest = (carpoolId, userId, accepted) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/carpools/request`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({carpoolId: carpoolId, userId: userId, accepted})
})
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(() => dispatch(fetchRequestSuccess()))
  .catch(err => dispatch(fetchRequestError(err)))
}