import React, { PropTypes } from 'react'
import ArtistTile from './ArtistTile'

const ArtistTileContainer = ({ artists }) => (
	<div className='artist-tile-container'>
		{
			artists.map((artist, index) => {
				return React.createElement(ArtistTile, {
					artist: artist.artist,
					key: index,
					imageURL: artist.icon_image.imageURL,
					setCount: artist.set_count,
					eventCount: artist.event_count
				})
			})
		}
	</div>
)

ArtistTileContainer.propTypes = {
	artists: PropTypes.array.isRequired,
	loadMore: PropTypes.func
}

export default ArtistTileContainer