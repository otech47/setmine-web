import * as types from '../constants/actionTypes'

const initialState = {
    sets: [],
    events: [],
    tracks: [],
    artists: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.SEARCH:
            return {
                ...state,
                sets: action.sets,
                events: action.events,
                tracks: action.tracks,
                artists: action.artists
            }
        default:
            return state
    }
}
