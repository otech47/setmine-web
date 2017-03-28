import React, { PropTypes } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Link from 'react-router/lib/Link'
import Icon from './Icon'
import ToolTip from './ToolTip'
import Ink from 'react-ink'

const height = ((window.innerHeight - 64) / window.innerHeight) * 100 + '%'

export default function Sidebar(props) {
    return (
        <nav className='Sidebar' style={{ height: height }}>
            <Link 
                to='/home' 
                className='Sidebar__link' 
                activeClassName='Sidebar--active'
            >
                <Icon size={24} fixed>home</Icon>
                <ToolTip>Home</ToolTip>
                <Ink />
            </Link>
            <Link 
                to='/sets' 
                className='Sidebar__link' 
                activeClassName='Sidebar--active'
            >
                <Icon size={24} fixed>music</Icon>
                <ToolTip>Sets</ToolTip>
                <Ink />
            </Link>
            <Link 
                to='/events' 
                className='Sidebar__link' 
                activeClassName='Sidebar--active'
            >
                <Icon size={24} fixed>calendar-o</Icon>
                <ToolTip>Events</ToolTip>
                <Ink />
            </Link>
            <Link 
                to='/artists' 
                className='Sidebar__link' 
                activeClassName='Sidebar--active'
            >
                <Icon size={24} fixed>microphone</Icon>
                <ToolTip>Artists</ToolTip>
                <Ink />
            </Link>
        </nav>
    )
}