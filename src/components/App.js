import React, { PropTypes } from 'react'
// import DocMeta from 'react-doc-meta'

// import initialAppState from '../services/appStateConfig'
// import GlobalEventHandler from '../services/globalEventHandler'
// import { playSet, updatePlayCount } from '../services/playerService'
// import { startFacebookSDK } from '../services/loginService'
import { getFavorites } from '../services/favoriteSet'
import detectMobileService from '../services/detectMobileService'
import { trackSetPlay } from '../services/mixpanelService'

import { connect } from 'react-redux'
import { changeCurrentPage, initEnvironment } from '../actions/environment'
import { initAuth } from '../actions/auth'

import Base from './Base'
import Header from './Header'
import Sidebar from './Sidebar'
import Player from './Player'
// import Notifications from './Notifications'
import LoginOverlay from './LoginOverlay'
import Loader from './Loader'
import DevTools from '../containers/DevTools'

// const tags = [
//     {property: "description", content: "Setmine is a music app dedicated to live events! Relive past music festivals: Ultra, Coachella + more! Find upcoming shows + buy tix + listen to DJs' sets"},
//     {property: "og:site_name", content: "Setmine"},
//     {property: "fb:app_id", content: "648288801959503"},
//     {property: "og:description", content: "Setmine offers live music enthusiasts a new way to experience their favorite festival music.  No more struggling to find your favorite sets--we've done it all for you.  Listen to Ultra, Coachella, TomorrowWorld, and many more! Also don't forget to listen your favorite DJ's radio shows!"},
//     {property: "og:image", content: "https://setmine.com/images/setmine-logo-facebook.png"},
//     {property: "og:title", content: "Setmine | View Lineups & Play Sets | Relive Your Favorite Events"},
//     {property: "og:type", content: "website"},
//     {name: "google-site-verification", content: "T4hZD9xTwig_RvyoXaV9XQDYw5ksKEQywRkqaW-CGY4"}
// ]

// let evtHandler = GlobalEventHandler(initialAppState)
// let evtTypes = evtHandler.types
// let pushFn = evtHandler.push

// wrapper for pushFn. data must be an object
// const push = data => pushFn({
//     type: evtTypes.SHALLOW_MERGE,
//     data
// })

const isProduction = process.env.NODE_ENV === 'production'

class App extends Base {
    static contextTypes = {
        router: PropTypes.object
    }
    static childContextTypes = {
        // push: PropTypes.func,
        // user: PropTypes.object,
        // loginStatus: PropTypes.bool,
        // favoriteSetIds: PropTypes.array,
        dispatch: PropTypes.func
    }
    getChildContext() {
        return {
            // push: push,
            // user: this.state.appState.get('user'),
            // loginStatus: this.state.appState.get('loginStatus'),
            // favoriteSetIds: this.state.appState.get('favoriteSetIds'),
            dispatch: this.props.dispatch
        }
    }
    componentWillMount() {
        // const { appState } = this.state
        // const { router } = this.context
        const { dispatch } = this.props
        // initialize global appState and push fn
        // this.initializeApp()

        // detect if user is on mobile web
        dispatch(initEnvironment())

        // temporary workaround
        // if(!isProduction) {
        //     push({ loaded: true })
        // }

        // initialize Facebook SDK & check if user is logged in
        // dispatch(initAuth())

        // play set if specified in url
        // if(!!this.props.params.set) {
        //     let setId = this.props.params.set
        //     let currentSet = appState.get('currentSet')

            // playSet(setId, push)
            // updatePlayCount(setId, appState.get('user').id)
            // trackSetPlay(currentSet)
        // }
    }
    // initializeApp() {
    //     evtHandler.floodGate.subscribe(newState => {
    //         this.setState({ appState: newState })
    //     })
    // }
    render() {
        // let appState = this.state.appState
        // let snackbar = appState.get('snackbar')
        const { currentPage, loaded, playerVisible, showModal, dispatch, navbar, main, children } = this.props

        return (
            <Loader loaded={loaded}>
                { 
                    // process.env.NODE_ENV !== 'production' && <DevTools />
                }
                {/*<DocMeta tags={tags} />*/}
                <Header 
                    currentPage={currentPage}
                    location={this.props.location}
                />
                { this.props.location.pathname !== '/' && <Sidebar /> }
                { navbar }
                { main }
                {/*<Notifications snackbar={snackbar} playerHidden={playerHidden} />*/}
                <LoginOverlay open={showModal} />
                { playerVisible && <Player /> }
            </Loader>
        )
    }
}

function mapStateToProps({ environment }) {
    return {
        ...environment
    }
}

export default connect(mapStateToProps)(App)