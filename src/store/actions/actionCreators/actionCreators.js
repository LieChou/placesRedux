import * as types from '../actionTypes/actionTypes';


const fetchDataRequested = () => {
    return {
        type: types.DATA_REQUESTED
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: types.DATA_SUCCESS,
        data
    }
}

const fetchDataError = () => {
    return {
        type: types.DATA_ERROR
    }
}

const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataRequested())
        return fetch(`${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.864716,2.349014&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS}`)
            .then(response => response.json())
            .then(
                (responseJson) => {
                    console.log(responseJson.results);
                    dispatch(fetchDataSuccess(responseJson.results))
                })
            .catch((error) => {
                console.log(error);
                dispatch(fetchDataError())
            })
    }
}

export default fetchData;