import React, { PropTypes } from 'react'
import Base from './Base'
import { Link } from 'react-scroll'
import Ink from 'react-ink'

export default function SearchTab(props) {
        const { width, children, to, duration, offset, tabIndex } = props

        return (
            <Link className='SearchTab'
                to={to}
                spy
                smooth
                offset={offset}
                duration={duration}
            >
                <p>{children.toUpperCase()}</p>
                <Ink />
            </Link>
        )
    }

SearchTab.propTypes = {
    width: PropTypes.number,
    children: PropTypes.string,
    onClick: PropTypes.func
}

SearchTab.defaultProps = {
    offset: -112,
    duration: 200
}