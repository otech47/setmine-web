import React, { PropTypes } from 'react'

export default function DisabledTab({ children, tooltip }) {
    return (
        <div className='disabled-tab' title={tooltip}>
            <p>{children}</p>
        </div>
    )
}

DisabledTab.propTypes = {
    children: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired
}