import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Element, Events, animateScroll } from 'react-scroll'
import { changeCurrentPage } from '../actions/environment'
import { search, resetSearch } from '../actions/search'

import Tabs from './Tabs'
import ArtistTileContainer from './ArtistTileContainer'
import SetContainer from './SetContainer'
import EventContainer from './EventContainer'
import TrackContainer from './TrackContainer'
import SearchTab from './SearchTab'
import Loader from './Loader'

const scroll = animateScroll
const scrollDuration = 200

class SearchResults extends Component {
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
        dispatch(changeCurrentPage(`Results for ${query}`))
        dispatch(search(query))
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log(to, element)
            console.log('begin')
        })

        Events.scrollEvent.register('end', () => {
            console.log('end')
        })

        scroll.scrollToTop()
    }
    componentWillUnmount() {
        this.context.dispatch(resetSearch())
    }
    render() {
        const {
            artists,
            sets,
            events,
            tracks
        } = this.props

        return (
            <div className='SearchPage'>
                <Tabs>
                    <SearchTab to='artists'>artists</SearchTab>
                    <SearchTab to='sets'>sets</SearchTab>
                    <SearchTab to='events'>events</SearchTab>
                    <SearchTab to='tracks'>tracks</SearchTab>
                </Tabs>
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
            </div>
        )
    }
}

function mapStateToProps({ search }) {
    const { sets, events, tracks, artists } = search
    return {
        sets,
        events,
        artists,
        tracks
    }
}

export default connect(mapStateToProps)(SearchResults)