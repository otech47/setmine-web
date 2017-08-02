import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeCurrentPage, initEnvironment } from '../actions/environment'
import { initAuth } from '../actions/auth'
import routes from '../routes'

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

class App extends Component {
    static childContextTypes = {
        dispatch: PropTypes.func
    }
    getChildContext() {
        return {
            dispatch: this.props.dispatch
        }
    }
    componentWillMount() {
        const { dispatch } = this.props

        // detect if user is on mobile web
        dispatch(initEnvironment())

        // initialize Facebook SDK & check if user is logged in
        // dispatch(initAuth())

        // TODO move this to Sets.js
        // if(!!this.props.params.set) {
        //     let setId = this.props.params.set
        //     let currentSet = appState.get('currentSet')

            // playSet(setId, push)
            // updatePlayCount(setId, appState.get('user').id)
            // trackSetPlay(currentSet)
        // }
    }
    render() {
        return routes
    }
}

export default connect()(App)
