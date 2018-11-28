import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from '../store';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {ConnectedRouter} from 'connected-react-router';

const browserHistory = createBrowserHistory({basename: '/site/web'});
const store = configureStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#appContainer')
);