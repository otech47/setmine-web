import * as types from '../constants/actionTypes';
import api from '../services/api';
import _ from 'lodash';

export function fetchPopularSets(page) {
    return dispatch => (
        api.get(route)
            .then(payload => {
                // let sets = this.state.sets.concat(payload.sets_recent);
                let sets = payload.sets_popular;
                sets = _.uniq(sets);
                dispatch(receiveSets(sets));
            })
    )
}

export function fetchRecentSets(page) {
    return (dispatch, getState) =>
        api.get(`sets/recent?limit=48&page=${page}`)
            .then(payload => {
                const { sets } = getState();

                // append new sets to existing and remove duplicates
                let newSets = _.concat(sets.sets, payload.sets_recent);
                newSets = _.uniq(newSets);
                page++;

                dispatch(receiveSets(newSets, page));
            })
}

export function fetchPopularSets(page) {
    return (dispatch, getState) =>
        api.get(`sets/popular?limit=48&page=${page}`)
            .then(payload => {
                const { sets } = getState();

                // append new sets to existing and remove duplicates
                let newSets = _.concat(sets.sets, payload.sets_popular);
                newSets = _.uniq(newSets);
                page++;

                dispatch(receiveSets(newSets, page));
            })
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

