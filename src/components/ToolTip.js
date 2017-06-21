import React, { PropTypes } from 'react'

export default function ToolTip ({ children, direction }) {
	return (
		<div className='tooltip'>
			<p>{children}</p>
		</div>
	)
}

ToolTip.propTypes = {
	direction: PropTypes.oneOf(['top', 'right', 'left', 'bottom']).isRequired
}