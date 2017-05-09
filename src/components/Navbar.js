import React, { PropTypes } from 'react'
import Link from 'react-router/lib/Link'
import IndexLink from 'react-router/lib/IndexLink'
import Ink from 'react-ink'
import DisabledTab from './DisabledTab'

export function NavHome(props) {
    const loggedIn = false
    return (
        <nav className='Navbar'>
            <IndexLink to='/home' activeClassName='active'>
                <p>STREAM</p>
                <Ink />
            </IndexLink>
            {
                loggedIn ? (
                    <Link to='/home/favorites' activeClassName='active'>
                        <p>FAVORITES</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to start favoriting sets">FAVORITES</DisabledTab>
                )
            }
            {
                loggedIn ? (
                    <Link to='/home/sets' activeClassName='active'>
                        <p>SETS</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to see sets from artists you've favorited">SETS</DisabledTab>
                )
            }
            {
                loggedIn ? (
                    <Link to='/home/events' activeClassName='active'>
                        <p>EVENTS</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to see recommended events">EVENTS</DisabledTab>
                )
            }
        </nav>
    )
}

export function NavSets() {
    return (
        <nav className='Navbar'>
            <Link to='/recent' activeClassName='active' onlyActiveOnIndex>
                <p>RECENT</p>
                <Ink />
            </Link>
            <Link to='/popular' activeClassName='active'>
                <p>POPULAR</p>
                <Ink />
            </Link>
            <Link to='/festivals' activeClassName='active'>
                <p>FESTIVALS</p>
                <Ink />
            </Link>
            <Link to='/mixes' activeClassName='active'>
                <p>MIXES</p>
                <Ink />
            </Link>
        </nav>
    )
}

export function NavEvents() {
    return (
        <nav className='Navbar'>
            <IndexLink to='/events' activeClassName='active'>
                <p>UPCOMING</p>
                <Ink />
            </IndexLink>
            <Link to='/events/closest' activeClassName='active'>
                <p>NEAR YOU</p>
                <Ink />
            </Link>
            <Link to='/events/featured' activeClassName='active'>
                <p>FEATURED</p>
                <Ink />
            </Link>
        </nav>
    )
}

NavHome.propTypes = {
    loggedIn: PropTypes.bool.isRequired
}