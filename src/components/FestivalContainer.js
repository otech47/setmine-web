import React, { PropTypes } from 'react'
import FestivalTile from './FestivalTile'
import InfiniteScrollify from './InfiniteScrollify'

export default function FestivalContainer({ events }) {
	return (
		<div className='tile-container'>
			{
				events.map((festival, index) => {
					return React.createElement(FestivalTile, {
						key: index,
						id: festival.id,
						festival: festival.event,
						bannerImage: festival.banner_image.imageURL,
						setCount: festival.set_count,
						formattedDate: festival.formatted_date
					})
				})
			}
		</div>
	)
}

// FestivalContainer.defaultProps = {
// 	events: []
// }

FestivalContainer.propTypes = {
	events: PropTypes.array
}
