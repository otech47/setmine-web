import React, { PropTypes } from 'react'
import Link from 'react-router/lib/Link'
import IndexLink from 'react-router/lib/IndexLink'
import Ink from 'react-ink'
import DisabledTab from './DisabledTab'

export default function Nav({ children }) {
    return (
        <nav className='Tabs'>
            {
                React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                        activeClassName: 'active'
                    })
                })
            }
        </nav>
    )
}

export function NavHome({ loggedIn }) {
    return (
        <nav className='Tabs'>
            <IndexLink to='/home'>
                <p>STREAM</p>
                <Ink />
            </IndexLink>
            {
                loggedIn ? (
                    <Link to='/home/favorites'>
                        <p>FAVORITES</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to start favoriting sets">FAVORITES</DisabledTab>
                )
            }
            {
                loggedIn ? (
                    <Link to='/home/sets'>
                        <p>SETS</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to see sets from artists you've favorited">SETS</DisabledTab>
                )
            }
            {
                loggedIn ? (
                    <Link to='/home/events'>
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

function NavSets() {
    return (
        <nav className='Tabs'>
            <IndexLink to='/sets'>
                <p>RECENT</p>
                <Ink />
            </IndexLink>
            <Link to='/sets/popular'>
                <p>POPULAR</p>
                <Ink />
            </Link>
            <Link to='/sets/festivals'>
                <p>FESTIVALS</p>
                <Ink />
            </Link>
            <Link to='/sets/mixes'>
                <p>MIXES</p>
                <Ink />
            </Link>
        </nav>
    )
}

export function NavEvents() {
    return (
        <nav className='Tabs'>
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
        </nav>
    )
}

NavHome.propTypes = {
    loggedIn: PropTypes.bool.isRequired
}

Nav.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}
