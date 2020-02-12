import * as types from '../actionTypes/actionTypes';


const fetchDataRequested = () => {
    return {
        type: types.DATA_REQUESTED
    }
}

const fetchDataSuccess = () => {
    return {
        type: types.DATA_SUCCESS
    }
}

const fetchDataError = () => {
    return {
        type: types.DATA_ERROR
    }
}

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataRequested())
        return fetch(`${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.864716,2.349014&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS}`)
            .then(console.log(response))

    }
}