import * as types from '../constants/actionTypes'

const initialState = {
    events: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.RECEIVE_EVENTS:
            return {
                ...state,
                events: action.events
            }
        default:
            return state
    }
}