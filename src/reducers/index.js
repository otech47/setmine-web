import { combineReducers } from 'redux';
import auth from './auth';
import environment from './environment';
import sets from './sets';

const rootReducer = combineReducers({
    auth,
    environment,
    sets
});

export default rootReducer;