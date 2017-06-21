import * as types from '../constants/actionTypes'
import api from '../services/api'

export function fetchFestivals() {
    return (dispatch, getState) => {
        let { events: { events, page } } = getState()
        api.get(`events/festivals?limit=24&order=DESC&page=${page}`)
            .then(payload => {
                events = [].concat(events, payload.events_festivals)
                page++

                dispatch(receiveEvents(events, page))
            })
    }
}

function receiveEvents(events, page) {
    return {
        type: types.RECEIVE_EVENTS,
        events,
        page
    }
}

export function resetEvents() {
    return {
        type: types.RESET_EVENTS
    }
}

export function searchEvents(query) {
    return (dispatch, getState) => {

    }
}
