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

export function changeTrack(track, time) {
    
}