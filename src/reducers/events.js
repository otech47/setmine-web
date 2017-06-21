import * as types from '../constants/actionTypes'

const initialState = {
    events: [],
    page: 1
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.RECEIVE_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case types.RESET_EVENTS:
            return initialState
        default:
            return state
    }
}