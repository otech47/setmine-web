import * as types from '../constants/actionTypes'

const initialState = {
    user: null,
    favorites: [],
    sets: [],
    events: []
}

export default function login(state = initialState, action) {
    switch(action.type) {
        case types.LOGOUT:
            return initialState
        case types.RECEIVE_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}