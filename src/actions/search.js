import * as types from '../constants/actionTypes'
import api from '../services/api'
import { receiveSets } from './sets'
import { showLoader, changeCurrentPage } from './environment'

export function search(query) {
    return (dispatch, getState) => {
        dispatch(showLoader(true))
        dispatch(changeCurrentPage(`Results for ${query}`))
        api.get(`search/${query}`)
            .then(res => {
                const { artists, sets, events, tracks } = res.search
                dispatch(receiveSearchResults(artists, sets, events, tracks))
                dispatch(showLoader(false))               
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

export function resetSearch() {
    return {
        type: types.RESET_SEARCH
    }
}