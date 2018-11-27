import actionTypes from '../actions/actionTypes';
import VideosApi from '../api/VideosApi';

export function detailMovement(howMuch) {
    return (dispatch, getState) => {
        dispatch({type: actionTypes.MOVE_VIDEOS, howMuch});
    }
}

export function fetchVideos() {
    return (dispatch, getState)  => {
        dispatch({type: actionTypes.LOAD_VIDEOS_PROGRESS});
        VideosApi.getAllVideos().then(response => {
            dispatch({type: actionTypes.LOAD_VIDEOS_SUCCESS, videos: response.body})
        });
    }
}