import VideosApi from '../api/VideosApi';
import {push} from 'connected-react-router';

export const LOAD_VIDEOS_PROGRESS = 'LOAD_VIDEOS_PROGRESS'
export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS'
export const ADD_VIDEO_PROGRESS = 'ADD_VIDEO_PROGRESS'
export const ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS'
export const PREV_VIDEO = 'PREV_VIDEO'
export const NEXT_VIDEO = 'NEXT_VIDEO'
export const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO'
export const UPDATE_FORM = 'UPDATE_FORM'

export function setCurrentVideo(id) {
    return {type: SET_CURRENT_VIDEO, id}
}

export function prevVideo() {
    return {type: PREV_VIDEO};
}

export function nextVideo() {
    return {type: NEXT_VIDEO};
}

export function updateForm(name, value) {
    return {type: UPDATE_FORM, name, value};
}

export function addVideo(title, description, file) {
    return (dispatch, getState) => {
        dispatch({type: ADD_VIDEO_PROGRESS});
        VideosApi.createVideo(title, description, file)
            .then(response => {
                dispatch({type: ADD_VIDEO_SUCCESS});
                return response.body.id;
            }).then(id => {
                dispatch(push(`/videos/${id}`));
            });
    }
}

export function fetchVideos() {
    return (dispatch, getState)  => {
        dispatch({type: LOAD_VIDEOS_PROGRESS});
        VideosApi.getAllVideos().then(response => {
            dispatch({type: LOAD_VIDEOS_SUCCESS, videoList: response.body})
        });
    }
}