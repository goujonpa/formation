import {applyMiddleWare, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers';

export default browserHistory => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const logger = createLogger();
    const store = createStore(
        createRootReducer(browserHistory),
        composeEnhancers(
            applyMiddleWare(
                thunk,
                logger,
                routerMiddleware(browserHistory)
            )
        )
    );
    return store;
}