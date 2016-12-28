import React, { Component, PropTypes } from 'react'
import { formatSetName } from '../services/formatUtils'
import {checkIfFavorited} from '../services/favoriteSet'

import SetTile from './SetTile'
import InfiniteScrollify from './InfiniteScrollify'

class SetContainer extends Component {
    static propTypes = {
        sets: PropTypes.array.isRequired,
        onScroll: PropTypes.func
    }
    static contextTypes = {
        push: PropTypes.func,
        user: PropTypes.object,
        loginStatus: PropTypes.bool,
        favoriteSetIds: PropTypes.array
    }
    static defaultProps = {
        sets: []
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        switch(true) {
            case nextProps.sets != this.props.sets:
                return true
            case nextContext.favoriteSetIds != this.context.favoriteSetIds:
                return true
            default:
                return false
        }
    }
    render() {
        const tiles = this.props.sets.map((set, index) => {
            // check if each set is favorited
            const favorited = this.context.loginStatus ? checkIfFavorited(set.id, this.context.favoriteSetIds) : false

            // show episode on set tiles
            // const setName = (set.episode != undefined && Object.keys(set.episode).length != 0) ? `${set.event.event} - ${set.episode.episode}` : set.event.event
            const setName = formatSetName(set)
            const bannerImage = (set.icon_image && set.icon_image.imageURL) ? set.icon_image.imageURL : set.event.banner_image.imageURL

            return React.createElement(SetTile, {
                key: index,
                id: set.id,
                setName: setName,
                artists: set.artists,
                event: set.event.event,
                eventId: set.event_id,
                isRadiomix: set.event.is_radiomix,
                setLength: set.set_length,
                popularity: set.popularity,
                songUrl: set.songURL,
                bannerImage: bannerImage,
                favorited: favorited
            })
        })

        return (
            <div className='tile-container'>
                {tiles}
            </div>
        )
    }
}

export default InfiniteScrollify(SetContainer)