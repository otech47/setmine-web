import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import auth from './auth'
import environment from './environment'
import player from './player'
import sets from './sets'
import events from './events'
import search from './search'

const rootReducer = combineReducers({
    auth,
    environment,
    events,
    player,
    routing,
    sets,
    search
})

export default rootReducer