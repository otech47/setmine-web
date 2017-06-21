import * as types from '../constants/actionTypes'
import api from '../services/api'
import { receiveSets } from './sets'
import { receiveEvents } from './events'
import { showLoader } from './environment'

export function fetchArtist(name) {
    return dispatch => {
        dispatch(showLoader(true))
        api.get(`artists/search/${name}`)
            .then(payload => {
                const a = payload.artists_search
                const artist = {
                    artist: a.artist,
                    sets: a.sets,
                    events: a.upcoming_events,
                    image: a.icon_image.imageURL,
                    setCount: a.set_count,
                    eventCount: a.event_count
                }

                dispatch(receiveArtist(artist))
                dispatch(showLoader(false))
            })
    }
}

function receiveArtist(artist) {
    return {
        type: types.RECEIVE_ARTIST,
        artist
    }
}