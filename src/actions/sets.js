import * as types from '../constants/actionTypes'
import api from '../services/api'
import _ from 'lodash'
import { showLoader } from './environment'

// TODO move to component specific
export function fetchPopularSets(page) {
    return (dispatch, getState) => {
        api.get(`sets/popular?limit=24&page=${page}`)
            .then(payload => {
                const { sets } = getState()
                let newSets = [].concat(sets.sets, payload.sets_popular)
                dispatch(receiveSets(newSets, page))
            })
    }
}

export function fetchRecentSets(page) {
    console.log('fetching')
    return (dispatch, getState) => {
        api.get(`sets/recent?limit=24&page=${page}`)
            .then(payload => {
                let { sets } = getState()

                sets = [].concat(sets.sets, payload.sets_recent)
                sets = _.uniqBy(sets, 'id')
                console.log(sets)
                page++

                dispatch(receiveSets(sets, page))
                // dispatch(showLoader(false))
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