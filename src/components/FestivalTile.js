import React, { PropTypes } from 'react'
import { S3_ROOT_FOR_IMAGES, DEFAULT_IMAGE } from '../constants/constants'

export default function FestivalTile({ festival, id, setCount, bannerImage, formattedDate }, { router }) {
	const sets = setCount != 1 ? `${setCount} sets`: `${setCount} set`
	const image = DEFAULT_IMAGE || bannerImage.imageURL
	
	return (
		<div className='col-xs-6 col-sm-4 col-xl-3'>
			<div className='festival-tile flex-column' 
				style={{ backgroundImage: `url('${S3_ROOT_FOR_IMAGES + bannerImage}')` }}
				onClick={() => router.push(`/festival/${id}`)}
			>
				<header className='flex-column'>
					<p className='info'>{`${sets} | ${formattedDate}`}</p>
					<p className='festival'>{festival}</p>
				</header>
			</div>
		</div>
	)
}

FestivalTile.contextTypes = {
	router: PropTypes.object
}

FestivalTile.propTypes = {
	event: PropTypes.string,
	bannerImage: PropTypes.string,
	setCount: PropTypes.number,
	formattedDate: PropTypes.string,
	id: PropTypes.number
}