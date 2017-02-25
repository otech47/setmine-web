import React, {PropTypes, Component} from 'react'
import TrackTile from './TrackTile'

export default class TrackContainer extends Component {
    static  propTypes = {
        tracks: PropTypes.array.isRequired
    }
    static defaultProps = {
        tracks: []
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.tracks != this.props.tracks
    }
    render() {
        return (
            <div className='tile-container'>
                {
                    this.props.tracks.map((track, index) => {
                        return React.createElement(TrackTile, {
                            key: index,
                            songName: track.song_name,
                            artistName: track.artist_name,
                            trackName: track.track_name,
                            id: track.id,
                            songUrl: track.songURL,
                            startTime: track.starttime,
                            setLength: track.set_length,
                            event: track.event.event,
                            artists: track.artists,
                            isRadiomix: track.is_radiomix,
                            eventId: track.event_id,
                            bannerImage: track.event.banner_image.imageURL,
                            artistImage: track.artists[0].icon_image.imageURL_small
                        })
                    })
                }
            </div>
        )
    }
}
