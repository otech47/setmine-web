import { soundManager } from 'soundmanager2'

const smPromise = new Promise(function(resolve, reject) {
    soundManager.setup({
        url: '/swf/soundmanager2.swf',
        debugMode: false,
        onready() {
            console.log('SM2 loaded')
            resolve()
        },
        ontimeout() {
            console.log('Error loading SoundManager2')
            reject()
        }
    })
})

export {
    smPromise,
    soundManager
}