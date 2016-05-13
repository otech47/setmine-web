import { combineReducers } from 'redux';
import auth from './auth';
import environment from './environment';

const rootReducer = combineReducers({
    auth,
    environment
});

export default rootReducer;