import * as types from '../constants/actionTypes'

const initialState = {
    page: 1,
    sets: []
}

export default function sets(state = initialState, action) {
    switch(action.type) {
        case types.RECEIVE_SETS:
            return {
                ...state,
                page: action.page,
                sets: action.sets
            }
        case types.RESET_SETS:
            return initialState
        default:
            return state
    }
}