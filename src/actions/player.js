import * as types from '../constants/actionTypes'
import _ from 'lodash'
import { formatSetName, formatSeconds, MMSSToMilliseconds } from '../services/formatUtils'
import { smPromise, soundManager } from '../services/playerConfig'
import { S3_ROOT } from '../constants/constants'
import api from '../services/api'
import { togglePlayer } from './environment'

// changeTrack :: Object => Action
export function changeTrack(track) {
    return (dispatch, getState) => {
        const { player: { sound } } = getState()
        const { starttime, trackname } = track
        sound.setPosition(starttime)

        dispatch({
            type: types.CHANGE_TRACK,
            timeElapsed: starttime,
            currentTrack: trackname
        })
    }
}

// destroyPlayingSet :: Object => SM2
function destroyPlayingSet(sound) {
    if(sound != null) {
        console.log('destroying currently playing set')
        soundManager.destroySound('currentSound')
    }
}

// fetchSet :: String => Object
function fetchSet(id) {
    return dispatch => {
        api.graph({
            query: `{
                set(id: ${id}) {
                    id,
                    set_length,
                    songURL,
                    artists {
                        artist,
                        icon_image {
                            imageURL_small
                        }
                    },
                    event {
                        event
                    },
                    tracks {
                        trackname,
                        starttime
                    }
                }
            }`
        }).then(res => {
            // update state with set from api call
            dispatch(receiveSet(res.set))
            // create sound with soundmanager and play
            dispatch(generateSound())
            // update play count on database
            dispatch(updatePlayCount(id))
        })
    }
}

// generateSound :: None => Promise
export function generateSound() {
    return (dispatch, getState) => {
        let { player: { currentSet, sound } } = getState()

        const songUrl = S3_ROOT + currentSet.songUrl
        console.log(songUrl)
        const startTime = currentSet.startTime

        const soundConfig = {
            id: 'currentSound',
            url: songUrl,
            load: startTime,
            whileplaying() {
                dispatch(updateTime(this.position))
                // TODO speed this up
                dispatch(updateCurrentTrack())
            }
        }

        return smPromise.then(() => {
            sound = soundManager.createSound(soundConfig)
            sound.setPosition(startTime)
            soundManager.play('currentSound')
            dispatch(updateSound(sound))
        })
    }
}

// playSet :: String => Object, String
export function playSet(id) {
    return (dispatch, getState) => {
        const { 
            environment: { playerVisible },
            player: { sound } 
        } = getState()

        if(!playerVisible) {
            dispatch(togglePlayer())
        }
        
        destroyPlayingSet(sound)
        dispatch(fetchSet(id))
    }
}

// Object => Object
function receiveSet(set) {
    const tracks = set.tracks
    const currentSet = {
        artist: set.artists[0].artist,
        event: set.event.event,
        setName: formatSetName(set),
        setLength: set.set_length,
        artistImage: set.artists[0].icon_image.imageURL_small,
        startTime: 0,
        songUrl: set.songURL,
        id: set.id
    }

    return {
        type: types.RECEIVE_SET,
        currentSet,
        tracks
    }
}

export function shuffle(sets) {
    return dispatch => {
        const random = Math.floor(Math.random() * (sets.length - 1))
        const randomSetId = sets[random]
        dispatch(playSet(randomSetId))
    }
}

export function togglePlay() {
    return (dispatch, getState) => {
        const { player: { sound } } = getState()
        dispatch({ type: types.CHANGE_PLAYING })
        if(sound.paused) {
            sound.play()
        } else {
            sound.pause()
        }
    }
}

// TODO test
export function updateCurrentTrack() {
    return (dispatch, getState) => {
        const { player: { sound, tracks } } = getState()
        const currentPosition = sound.position

        let currentTrack = tracks.filter(track => {
            const startTime = MMSSToMilliseconds(track.starttime)
            if(startTime <= currentPosition) {
                return track.trackname
            }
        })

        currentTrack = _.last(currentTrack).trackname

        dispatch({
            type: types.UPDATE_CURRENT_TRACK,
            currentTrack
        })
    }
}

// TODO test
function updatePlayCount(setId) {
    return (dispatch, getState) => {
        const { user: id } = getState()

        api.post('sets/play', {
            set_id: setId,
            user_id: id
        }).then(res => {
            console.log('play count updated')
        })
    }
}

function updateSound(sound) {
    return {
        type: types.UPDATE_SOUND,
        sound
    }
}

export function updateTime(time) {
    const timeElapsed = formatSeconds(time)
    return {
        type: types.UPDATE_TIME,
        timeElapsed
    }
}