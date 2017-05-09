import * as types from '../constants/actionTypes'

export function changeCurrentPage(page) {
    return {
        type: types.CHANGE_CURRENT_PAGE,
        page
    }
}

function changeIsMobile(isMobile) {
    console.log('isMobile', isMobile)
    return {
        type: types.CHANGE_IS_MOBILE,
        isMobile
    }
}

export function showLoader(loading) {
    return {
        type: types.SHOW_LOADER,
        loading
    }
}

export function toggleModal() {
    return {
        type: types.SHOW_MODAL
    }
}

export function togglePlayer() {
    return {
        type: types.TOGGLE_PLAYER
    }
}

// TODO test this
function detectMobileBrowser() {
    // console.log(window.location.pathname)
    if(isiOS()) {
        if(window.location.pathname.length > 0) {
            var pathWithoutLeadingSlash = window.location.pathname.substring(1)
            var parameters = pathWithoutLeadingSlash.split('/')
            var command = parameters[0]
            var value = parameters[1]
            switch(command) {
                case 'play':
                    window.location = 'setmine://setmine.com/' + pathWithoutLeadingSlash; break
                case 'artist':
                    window.location = 'setmine://setmine.com/browse/' + value.split('+').join('%20') + '/artist'; break
                case 'festival':
                    window.location = 'setmine://setmine.com/browse/' + value.split('+').join('%20') + '/festival'; break
                case 'mix':
                    window.location = 'setmine://setmine.com/browse/' + value.split('+').join('%20') + '/mix'; break
                case 'event':
                    window.location = 'setmine://setmine.com/' + pathWithoutLeadingSlash; break
                case 'offer':
                    window.location = 'setmine://setmine.com/' + pathWithoutLeadingSlash; break
            }

        } else {
            window.location = 'setmine://setmine.com/bugfix'
        }
    }
}

export function initEnvironment() {
    return (dispatch, getState) => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        // detectMobileBrowser()

        dispatch(changeIsMobile(isMobile))
    }
}

function isiOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
}