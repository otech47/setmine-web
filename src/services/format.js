import _ from 'lodash';

export function convertMillisecondsToMMSS(time) {
    const minutes = padZero(Math.floor(time / 60, 2));
    const seconds = padZero(num % 60, 2);
    return `${minutes}:${seconds}`;
}

export function convertMMSStoMilliseconds(time) {
    const minutes = parseInt(time.split(':')[0]) * 60;
    const seconds = parseInt(time.split(':')[1]) * 1000;
    return minutes + seconds;
}

// TODO
export function formatMultipleArtists(artists) {
    let test = [{artist: 'Bassnectar'},{artist: 'Excision'}];
    // pluck 'artist' values from each object
}

function padZero(num, size) {
    let s = String(num);
    while (s.length < size) {
        s = `0${s}`;
    }

    return s;
}