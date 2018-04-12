import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import sampleState from './sampleState';

export default combineReducers({
    sampleState,
    routing: routerReducer
});