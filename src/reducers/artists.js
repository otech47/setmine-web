import * as types from '../constants/actionTypes'
import { DEFAULT_IMAGE } from '../constants/constants'

const initialState = {
    artists: [],
    artist: {
        artist: null,
        sets: [],
        events: [],
        artistImage: DEFAULT_IMAGE,
        setCount: 0,
        eventCount: 0
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.RECEIVE_ARTIST:
            return {
                ...state,
                artist: action.artist
            }
        default:
            return state
    }
}