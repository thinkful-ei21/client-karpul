import {
    PIC_REQUEST,
    PIC_SUCCESS,
    PIC_ERROR
} from '../actions/users';

const initialState = {
    picUrl: "",
    loading: false
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
    }
    return state
}