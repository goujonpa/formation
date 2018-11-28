import {
    PREV_VIDEO, 
    NEXT_VIDEO, 
    LOAD_VIDEOS_SUCCESS, 
    LOAD_VIDEOS_PROGRESS
} from '../actions/videoActions';

const defaultState = {
    videoList: [],
    currentVideoId: 1,
    loadingVideos: false
}

const videoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_VIDEOS_SUCCESS:
            return {
                ...state,
                videoList: action.videoList,
                loadingVideos: false
            }
            break;
        case PREV_VIDEO:
            return {
                ...state,
                currentVideoId: (state.currentVideoId - 1) % state.videoList.length
            }
            break;
        case NEXT_VIDEO:
            return {
                ...state,
                currentVideoId: (state.currentVideoId + 1) % state.videoList.length
            }
            break;
        case LOAD_VIDEOS_PROGRESS:
            return {
                ...state,
                loadingVideos: true
            }
            break;
        default:
            return state;
            break;
    }
}

export default videoReducer;