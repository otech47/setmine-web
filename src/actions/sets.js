import * as types from '../constants/actionTypes'
import api from '../services/api'
// import { showLoader } from './environment'

// TODO move to component specific
export function fetchPopularSets() { 
    return (dispatch, getState) => {
        let page = getState().sets.page
        api.get(`sets/popular?limit=24&page=${page}`)
            .then(payload => {
                let { sets } = getState()
                sets = [].concat(sets.sets, payload.sets_popular)
                page++

                dispatch(receiveSets(sets, page))
            })
    }
}

export function fetchRecentSets() {
    return (dispatch, getState) => {
        let page = getState().sets.page
        api.get(`sets/recent?limit=24&page=${page}`)
            .then(payload => {
                let { sets } = getState()
                sets = [].concat(sets.sets, payload.sets_recent)
                page++

                dispatch(receiveSets(sets, page))
            })
    }
}

function receiveSets(sets, page) {
    return {
        type: types.RECEIVE_SETS,
        loaded: true,
        sets,
        page
    }
}

export function resetSets() {
    return {
        type: types.RESET_SETS
    }
}