import * as types from '../constants/actionTypes'
import api from '../services/api'
import { push } from 'react-router-redux'
import { receiveSets } from './sets'

export function search(query) {
    return (dispatch, getState) => {
        const { routing } = getState()
        push('/search')
        
        api.get(`search/${query}`)
            .then(res => {
                const { artists, sets, events, tracks } = res.search
                dispatch(receiveSearchResults(artists, sets, events, tracks))

            })
    }
}

function receiveSearchResults(artists, sets, events, tracks) {
    return {
        type: types.SEARCH,
        artists,
        sets,
        events,
        tracks
    }
}

function receiveTracks(tracks) {
    return {
        type: types.RECEIVE_TRACKS,
        tracks
    }
}