import {
    ADD_COMMENT_PROGRESS, 
    ADD_COMMENT_SUCCESS

} from '../actions/videoActions';

const defaultState = {
    comments: []
}

const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default commentReducer;