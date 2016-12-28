import React, { PropTypes } from 'react'
import { S3_ROOT_FOR_IMAGES } from '../constants/constants'

export default function DetailHeader({ image, children }) {
	image = {
		backgroundImage: `url('${S3_ROOT_FOR_IMAGES+image}')`
	}

	return (
		<div className='DetailHeader flex-column' style={image}>
			{children}
		</div>
	)
}

DetailHeader.propTypes = {
	image: PropTypes.string.isRequired
}