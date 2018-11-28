import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import videoReducer from './videoReducer';
import commentReducer from './commentReducer';

export default history => combineReducers({
    router: connectRouter(history),
    videos: videoReducer,
    comments: commentReducer,
});

