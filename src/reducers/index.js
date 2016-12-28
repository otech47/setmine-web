import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import auth from './auth'
import environment from './environment'
import player from './player'
import sets from './sets'
import events from './events'

const rootReducer = combineReducers({
    auth,
    environment,
    events,
    player,
    routing,
    sets 
})

export default rootReducer