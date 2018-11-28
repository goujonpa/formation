import VideosApi from '../api/VideosApi';

export const LOAD_VIDEOS_PROGRESS = 'LOAD_VIDEOS_PROGRESS'
export const LOAD_VIDEOS_SUCCESS = 'LOAD_VIDEOS_SUCCESS'
export const PREV_VIDEO = 'PREV_VIDEO'
export const NEXT_VIDEO = 'NEXT_VIDEO'


export function prevVideo() {
    return {type: PREV_VIDEO};
}

export function nextVideo() {
    return {type: NEXT_VIDEO};
}

export function fetchVideos() {
    return (dispatch, getState)  => {
        dispatch({type: LOAD_VIDEOS_PROGRESS});
        VideosApi.getAllVideos().then(response => {
            dispatch({type: LOAD_VIDEOS_SUCCESS, videoList: response.body})
        });
    }
}