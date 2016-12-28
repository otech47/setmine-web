import React, { PropTypes } from 'react'

export default function Track({ className, trackname, starttime, style, onClick }) {
    return (
        <p 
            className={`Track ${className}`} 
            onClick={() => onClick({ trackname, starttime })} 
            style={style}
        >
            <span className='Track__starttime'>{starttime}</span>
            <span className='Track__trackname'>{trackname}</span>
        </p>
    )
}

Track.propTypes = {
    starttime: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
}