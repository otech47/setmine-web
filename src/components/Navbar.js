import React, { PropTypes } from 'react'
import Link from 'react-router/lib/Link'
import IndexLink from 'react-router/lib/IndexLink'
import Ink from 'react-ink'
import SearchTab from './SearchTab'
import DisabledTab from './DisabledTab'

export function NavHome(props) {
    const loggedIn = false
    return (
        <nav className='Navbar'>
            <IndexLink to='/home' className='Tab' activeClassName='active'>
                <p>STREAM</p>
                <Ink />
            </IndexLink>
            {
                loggedIn ? (
                    <Link to='/home/favorites' className='Tab' activeClassName='active'>
                        <p>FAVORITES</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to start favoriting sets">FAVORITES</DisabledTab>
                )
            }
            {
                loggedIn ? (
                    <Link to='/home/sets' className='Tab' activeClassName='active'>
                        <p>SETS</p>
                        <Ink />
                    </Link>
                ) : (
                    <DisabledTab tooltip="Log in to see sets from artists you've favorited">SETS</DisabledTab>
                )
            }
            {
                loggedIn ? (
                    <Link to='/home/events' className='Tab' activeClassName='active'>
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
            <Link to='/recent' className='Tab' activeClassName='active' onlyActiveOnIndex>
                <p>RECENT</p>
                <Ink />
            </Link>
            <Link to='/popular' className='Tab' activeClassName='active'>
                <p>POPULAR</p>
                <Ink />
            </Link>
            <Link to='/festivals' className='Tab' activeClassName='active'>
                <p>FESTIVALS</p>
                <Ink />
            </Link>
            <Link to='/mixes' className='Tab' activeClassName='active'>
                <p>MIXES</p>
                <Ink />
            </Link>
        </nav>
    )
}

export function NavEvents() {
    return (
        <nav className='Navbar'>
            <IndexLink to='/events' className='Tab' activeClassName='active'>
                <p>UPCOMING</p>
                <Ink />
            </IndexLink>
            <Link to='/events/closest' className='Tab' activeClassName='active'>
                <p>NEAR YOU</p>
                <Ink />
            </Link>
            <Link to='/events/featured' className='Tab' activeClassName='active'>
                <p>FEATURED</p>
                <Ink />
            </Link>
        </nav>
    )
}

export function NavSearch() {
    return (
        <nav className='Navbar'>
            <SearchTab to='artists'>artists</SearchTab>
            <SearchTab to='sets'>sets</SearchTab>
            <SearchTab to='events'>events</SearchTab>
            <SearchTab to='tracks'>tracks</SearchTab>
        </nav>
    )
}

export function NavArtists() {
    return (
        <nav className='Navbar'>
        </nav>
    )
}

NavHome.propTypes = {
    loggedIn: PropTypes.bool.isRequired
}