import {combineReducers} from 'redux';
import videoReducer from './videoReducer';
import {connectRouter} from 'connected-react-router';


export default history => combineReducers({
    router: connectRouter(history),
    videos: videoReducer
});

