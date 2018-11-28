import {
    PREV_VIDEO, 
    NEXT_VIDEO, 
    LOAD_VIDEOS_SUCCESS, 
    LOAD_VIDEOS_PROGRESS,
    SET_CURRENT_VIDEO
} from '../actions/videoActions';

const defaultState = {
    videoList: [],
    currentVideoId: 1,
    loadingVideos: false
}

const videoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_VIDEO:
            return {
                ...state,
                currentVideoId: action.id
            }
        case LOAD_VIDEOS_SUCCESS:
            return {
                ...state,
                videoList: action.videoList,
                loadingVideos: false
            }
        case PREV_VIDEO:
            return {
                ...state,
                currentVideoId: (state.currentVideoId - 1) % state.videoList.length + 1
            }
        case NEXT_VIDEO:
            return {
                ...state,
                currentVideoId: (state.currentVideoId + 1) % state.videoList.length + 1
            }
        case LOAD_VIDEOS_PROGRESS:
            return {
                ...state,
                loadingVideos: true
            }
        default:
            return state;
    }
}

export default videoReducer;