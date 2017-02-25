import * as types from '../constants/actionTypes'
import api from '../services/api'
import { receiveSets } from './sets'
import { showLoader } from './environment'

// search :: String -> Object
export function search(query) {
    return (dispatch, getState) => {
        dispatch(showLoader(true))
        api.get(`search/${query}`)
            .then(res => {
                const { artists, sets, events, tracks } = res.search
                dispatch(receiveSearchResults(artists, sets, events, tracks))
            })
            .then(() => {
                dispatch(showLoader(false))
            })
    }
}

// receiveSearchResults :: Array -> Action
function receiveSearchResults(artists, sets, events, tracks) {
    return {
        type: types.SEARCH,
        artists,
        sets,
        events,
        tracks
    }
}

export function resetSearch() {
    return {
        type: types.RESET_SEARCH
    }
}