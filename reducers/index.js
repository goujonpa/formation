import actionTypes from '../actions/actionTypes';


const defaultState = {
    videos: [],
    currentVideoId: 1
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case actionTypes.LOAD_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.videos
            }
            break;
        case actionTypes.MOVE_VIDEOS:
            return {
                ...state,
                currentVideoId: (
                    state.currentVideoId + 
                    action.howMuch
                )
            }
            break;
        default:
            return state;
            break;
    }
}