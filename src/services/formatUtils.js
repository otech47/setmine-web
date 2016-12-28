export function formatSeconds(ms) {
    const secs = ms / 1000;
    const minutes = padZero(Math.floor(secs / 60), 2);
    const seconds = padZero(Math.floor(secs % 60), 2);
    return `${minutes}:${seconds}`;
}

export function formatSetName(set) {
    const setName = (set.episode && Object.keys(set.episode).length != 0) ? `${set.event.event} - ${set.episode.episode}` : set.event.event;
    return setName;
}

export function MMSSToMilliseconds(time) {
    return (parseInt(time.split(':')[0])*60 +
        parseInt(time.split(':')[1]))*1000;
}

function padZero(num, size) {
    let s = String(num);
    while (s.length < size) {
        s = `0${s}`;
    }
    return s;
}