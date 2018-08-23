import {
    PIC_REQUEST,
    PIC_SUCCESS,
    PIC_ERROR,
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS,
    UPDATE_USER_DATA_REQUEST,
    UPDATE_USER_DATA_SUCCESS,
    FETCH_ERROR,
} from '../actions/users';

const initialState = {
    picUrl: "",
    loading: false,
    userData: {}
};

export default function reducer(state = initialState, action) {
    if (action.type === PIC_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    } else if (action.type === PIC_SUCCESS) {
        return Object.assign({}, state, {
            picUrl: action.picUrl,
            loading: false
        });
    } else if (action.type === PIC_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === FETCH_USER_DATA_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    } else if (action.type === FETCH_USER_DATA_SUCCESS){

        return Object.assign({}, state, {
            userData: action.userData,
            loading: false
        })
    } else if (action.type === UPDATE_USER_DATA_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    } else if (action.type === UPDATE_USER_DATA_SUCCESS){
        
        return Object.assign({}, state, {
            userData: action.userData,
            loading: false
        });
    } else if (action.type === FETCH_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state
}