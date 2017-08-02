import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Element, Events, animateScroll } from 'react-scroll'
import { search, resetSearch } from '../actions/search'

import Tabs from './Tabs'
import ArtistTileContainer from './ArtistTileContainer'
import SetContainer from './SetContainer'
import EventContainer from './EventContainer'
import TrackContainer from './TrackContainer'
import Loader from './Loader'

const scroll = animateScroll
const scrollDuration = 200

class Search extends Component {
    static propTypes = {
        artists: PropTypes.array.isRequired,
        sets: PropTypes.array.isRequired,
        events: PropTypes.array.isRequired,
        tracks: PropTypes.array.isRequired
    }
    static contextTypes = {
        dispatch: React.PropTypes.func
    }
    componentWillMount() {
        const { dispatch } = this.context
        const query = this.props.location.query.q
        dispatch(search(query))
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log(to, element)
            // console.log('begin')
        })

        Events.scrollEvent.register('end', () => {
            // console.log('end')
        })

        scroll.scrollToTop()
    }
    componentWillUnmount() {
        // this.context.dispatch(resetSearch())
    }
    render() {
        const {
            artists,
            sets,
            events,
            tracks,
            navbar,
            loading
        } = this.props

        return (
            <div className='SearchPage'>
                { navbar }
                <Loader loading={loading}>
                    <div className='SearchPage__results'>
                        <Element name='artists'>
                            <h6 className='SearchPage__header'>ARTISTS</h6>
                            <ArtistTileContainer artists={artists} />
                        </Element>
                        <Element name='sets'>
                            <h6 className='SearchPage__header'>SETS</h6>
                            <SetContainer sets={sets} />
                        </Element>
                        <Element name='events'>
                            <h6 className='SearchPage__header'>EVENTS</h6>
                            <EventContainer events={events} />
                        </Element>
                        <Element name='tracks'>
                            <h6 className='SearchPage__header'>TRACKS</h6>
                            <TrackContainer tracks={tracks} />
                        </Element>
                    </div>
                </Loader>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { search, environment } = state
    const { sets, events, tracks, artists } = search
    return {
        loading: environment.loading,
        sets,
        events,
        artists,
        tracks
    }
}

export default connect(mapStateToProps)(Search)