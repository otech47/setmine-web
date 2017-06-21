import * as types from '../constants/actionTypes'
import api from '../services/api'
import Cookies from 'js-cookie'

const savedUser = Cookies.get('user')

function lsTest() {
    const test = 'test'
    try {
        localStorage.setItem(test, test)
        localStorage.removeItem(test)
        return true
    } catch(e) {
        return false
    }
}

// called after initAuth() & FB.getLoginStatus()
function statusChangeCallback(response) {
    return dispatch => {
        console.log(response)
        switch(response.status) {
            case 'connected':
                console.log('Logged into setmine and Facebook.')
                // if (savedUser) {
                //     // Load saved user stored in cookies
                //     dispatch(receiveUser(savedUser))
                // }

                registerFacebookUser(response.authResponse.accessToken)
            case 'not_authorized':
                console.log('Logged into Facebook, but you need to authorize this app')
                break
            default:
                console.debug('Not logged into Facebook')
                break
        }
    }
}

export function favoriteSet(id) {
    return (dispatch, getState) => {
        
    }
}

// starts login process
export function initAuth() {
    return dispatch => {
        FB.getLoginStatus(res => {
            dispatch(statusChangeCallback(res))
        })
    }
}

export function login() {
    return dispatch => {
        FB.Login(res => {
            dispatch(statusChangeCallback(res))
        })
    }
}

// clears login data
export function logout() {
    return dispatch => {
        FB.logout(res => {
            console.log('Logged out of Facebook.')
            dispatch({
                type: types.LOGOUT
            })
        })
    }
}

function registerFacebookUser(auth) {
    return dispatch => {
        api.post('setmineuser/login/facebook', {
            facebook_token: auth
        }).then(res => {
            console.log('Successfully logged in to Setmine')
            const user = res.setmineuser_login_facebook
            console.log(user)

            // create array of users favorite setIds
            const favoriteSetIds = user.favorite_sets.map(set => {
                return set.id
            })

            dispatch(receiveUser(user))

            //track user after logging in for the first time
            // mixpanel.identify(user.facebook_id)
            // mixpanel.people.set_once({
            //     "First Name": user.first_name,
            //     "Last Name": user.last_name,
            //     "$email": user.username,
            //     "fb_id": user.facebook_id,
            //     "date_tracked": new Date()
            // })
        })
    }
}

function receiveUser(user) {
    return {
        type: types.RECEIVE_USER,
        user
    }
}