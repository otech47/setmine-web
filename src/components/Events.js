import React, { Component, PropTypes } from 'react'
import Loader from 'react-loader'
import Base from './Base'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Nav from './Nav'
import Ink from 'react-ink'

import { changeCurrentPage } from '../actions/environment'

export default class Events extends Component {
    componentWillMount() {
        this.context.dispatch(changeCurrentPage('Events'))
    }
    componentDidMount() {
        mixpanel.track("Events Page Open")
    }
    render() {
        return (
            <div className='view'>
                <Nav>
                    <IndexLink to='/events'>
                        <p>UPCOMING</p>
                        <Ink />
                    </IndexLink>
                    <Link to='/events/closest'>
                        <p>NEAR YOU</p>
                        <Ink />
                    </Link>
                    <Link to='/events/featured'>
                        <p>FEATURED</p>
                        <Ink />
                    </Link>
                </Nav>
                {
                    React.cloneElement(this.props.children, {
                        appState: this.props.appState
                    })
                }
            </div>
        )
    }
}

Events.contextTypes = {
    push: PropTypes.func,
    dispatch: PropTypes.func
}