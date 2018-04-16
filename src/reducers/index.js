import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import donations from './donations';

export default combineReducers({
    donations,
    routing: routerReducer
});