import * as types from '../constants/actionTypes';
import { MMSSToMilliseconds } from '../services/convert';
import _ from 'lodash';
import { soundManager } from 'soundmanager2';
import Q from 'q';

import { S3_ROOT } from '../constants/constants';

const smDeferred = Q.defer();
const smPromise = smDeferred.promise;

soundmanager.setup({
    url: '/swf/soundmanager2.swf',
    debugMode: false,
    onReady() {
        console.log('SM2 loaded');
        smDeferred.resolve();
    },
    onTimeout() {
        console.log('Error loading soundmanager');
    }
});

export function changePlayingSet(setId) {
    return {
        type: types.CHANGE_PLAYING_SET,
        setId
    }
}

export function changeTime(time) {
    return {
        type: types.CHANGE_TIME,
        time
    }
}

function fetchSet(setId) {
    return (dispatch, getState) => 
        api.get(`sets/id/${setId}`)
            .then(payload => {
                const set = payload.sets_id;
                const tracks = set.tracks;

                // let setName = set.event.event;
                // if(set.episode.episode && set.episode.episode.length > 0) {
                //     setName += ` - ${set.episode.episode}`;
                // }
                dispatch(playSet(set, tracks));
            })
}

export function playSet(set, tracks) {
    return dispatch => 
        // TODO
}