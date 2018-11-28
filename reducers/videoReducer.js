import {
    PREV_VIDEO, 
    NEXT_VIDEO, 
    LOAD_VIDEOS_SUCCESS, 
    LOAD_VIDEOS_PROGRESS,
    ADD_VIDEO_SUCCESS, 
    ADD_VIDEO_PROGRESS,
    SET_CURRENT_VIDEO,
    UPDATE_FORM
} from '../actions/videoActions';

const defaultState = {
    videoList: [],
    currentVideoId: 1,
    loadingVideos: false,
    addingVideo: false,
    addingForm: {
        title: '',
        description: '',
        file: null
    }
}

const videoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_VIDEO:
            return {
                ...state,
                currentVideoId: action.id
            }
        case UPDATE_FORM:
            return {
                ...state,
                addingForm: {
                    ...state.addingForm,
                    [action.name]: action.value
                }
            }
        case ADD_VIDEO_SUCCESS:
            return {
                ...state,
                addingVideo: false
            }
        case ADD_VIDEO_PROGRESS:
            return {
                ...state,
                addingVideo: true,
                addingForm: {
                    title: '',
                    description: '',
                    file: null
                }            
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