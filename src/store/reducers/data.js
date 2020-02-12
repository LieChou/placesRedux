import * as types from '../actions/actionTypes/actionTypes';
import initialState from '../InitialState';

const Data = (state = initialState, action) => {
    switch (action.type) {
        case types.DATA_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case types.DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case types.DATA_ERROR:
            return {
                ...state,
                loading: false,
                data: null
            }
        default:
            return state

    }
}

export default Data;