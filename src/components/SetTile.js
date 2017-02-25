import React, { PropTypes } from 'react'
import Base from './Base'
import Icon from './Icon'
import { API_ROOT, S3_ROOT_FOR_IMAGES, DEFAULT_IMAGE } from '../constants/constants'
import { trackSetPlay } from '../services/mixpanelService'
import SetShare from './SetShare'
import { fetchSet, playSet } from '../actions/player'
import { connect } from 'react-redux'

export default class SetTile extends Base {
    static propTypes = {
        id: PropTypes.number,
        eventId: PropTypes.number,
        setName: PropTypes.string,
        event: PropTypes.string,
        isRadiomix: PropTypes.number,
        artists: PropTypes.array,
        popularity: PropTypes.number,
        songUrl: PropTypes.string,
        bannerImage: PropTypes.string,
        favorited: PropTypes.bool
    }
    static defaultProps = {
        favorited: false,
        artistImage: DEFAULT_IMAGE
    }
    static contextTypes = {
        dispatch: PropTypes.func,
        user: PropTypes.object,
        loginStatus: PropTypes.bool,
        router: PropTypes.object
    }
    constructor(props) {
        super(props)
        this.autoBind('openArtistPage', 'openFestivalPage', 'playSet')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.favorited !== nextProps.favorited
    }
    openArtistPage(artist) {
        const route = artist.split(' ').join('_')
        this.context.router.push(`/artist/${route}`)

        mixpanel.track("Artist Clicked", {
            "Artist": artist
        })
    }
    openFestivalPage() {
        if(this.props.isRadiomix) {
            this.context.router.push(`/mix/${this.props.eventId}`)
        } else {
            this.context.router.push(`/festival/${this.props.eventId}`)
        }
    }
    playSet() {
        // TODO test this
        this.context.dispatch(playSet(this.props.id))
    }
    renderArtists() {
        return this.props.artists.map((artist, index) => {
            if(index === this.props.artists.length - 1) {
                return <span className='artist' key={index} onClick={() => this.openArtistPage(artist.artist)}>{artist.artist}</span>
            }
            return <span className='artist' key={index} onClick={() => this.openArtistPage(artist.artist)}>{`${artist.artist}, `}</span>
        })
    }
    renderNewTile() {}
    render() {
        const artistImage = this.props.artists[0].icon_image.imageURL_small
        const eventImage = {
            backgroundImage: `url(${S3_ROOT_FOR_IMAGES+this.props.bannerImage})`
        }

        return (
            <div className='col-xs-6 col-sm-4 col-xl-3'>
                <div className='set-tile flex-column' style={eventImage}>
                    <div className='detail flex-column'>
                        <img src={S3_ROOT_FOR_IMAGES+artistImage} />

                        <div className='set-info flex-column flex-fixed-2x'>
                            <p className='set' onClick={this.openFestivalPage}>
                                {this.props.setName}
                            </p> 
                            <p className='caption'>
                                {this.renderArtists()}
                            </p>
                            <SetShare 
                                id={this.props.id} 
                                favorited={this.props.favorited}
                            />
                        </div>

                        <div className='horizontal-divider center' />

                        <div className='flex-row flex-fixed flex-row'>
                            <div className='play clickable flex-fixed' onClick={this.playSet}>
                                <Icon>control-play</Icon>
                                <p>{this.props.popularity}</p>
                            </div>

                            <div className='vertical-divider' />

                            <div className='time flex-fixed flex-row'>
                                <Icon>time</Icon>
                                <p>{this.props.setLength}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
