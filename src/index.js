import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import routes from './routes';

// Stylesheets
import './styles/index.less';

// Redux Store setup
const logger = createLogger({
    level: 'info',
    collapsed: true
});

// Create an enhanced history that syncs navigation events with the store
const isProduction = process.env.NODE_ENV === 'production';

const envHistory = isProduction ? browserHistory : hashHistory;

const middleware = [thunk, routerMiddleware(envHistory)];

const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

const history = syncHistoryWithStore(envHistory, store);

const appMount = document.getElementById('app-mount-point');

render(
    <Provider store={store}>
        <Router history={history}>
            { routes }
        </Router>
    </Provider>
    , appMount
);