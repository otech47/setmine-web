import * as types from '../constants/actionTypes'
import api from '../services/api'

export function receiveEvents(events) {
    return {
        type: types.RECEIVE_EVENTS,
        events
    }
}

export function searchEvents(query) {
    return (dispatch, getState) => {

    }
}