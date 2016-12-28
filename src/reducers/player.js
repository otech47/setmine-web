import * as types from '../constants/actionTypes'

const initialState = {
    sound: null,
    isPlaying: false,
    currentTrack: null,
    timeElapsed: '00:00',
    currentSet: {
        artistImage: null
    },
    tracks: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_PLAYING:
            return {
                ...state,
            isPlaying: !state.isPlaying
            }
        case types.CHANGE_TRACK:
            return {
                ...state,
                timeElapsed: action.timeElapsed,
                currentTrack: action.currentTrack
            }
        case types.RECEIVE_SET:
            return {
                ...state,
                currentSet: action.currentSet,
                tracks: action.tracks
            }
        case types.UPDATE_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.currentTrack
            }
        case types.UPDATE_SOUND: {
            return {
                ...state,
                sound: action.sound,
                isPlaying: true
            }
        }
        case types.UPDATE_TIME:
            return {
                ...state,
                timeElapsed: action.timeElapsed
            }
        default:
            return state
    }
}