import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import PlayButton from './PlayButton'
import PlayerSeek from './PlayerSeek'
import PlayerSetInfo from './PlayerSetInfo'
import PlayerTracklist from './PlayerTracklist'

import { trackSetPlay } from '../services/mixpanelService'
import { checkIfFavorited } from '../services/favoriteSet'

import { changeTrack, generateSound, playSet, togglePlay, updateTime } from '../actions/player'

// refactor
// import SetShare from './SetShare'

class Player extends Base {
    render() {
        return (
            <div className='Player flex-row-nowrap'>
                <PlayButton {...this.props} />
                <div className='flex-column flex'>
                    <PlayerSeek {...this.props} />
                    <div className='flex flex-row'>
                        <PlayerSetInfo {...this.props} />
                        <PlayerTracklist {...this.props} />
                        {/*<SetShare id={currentSet.id} artistImage={currentSet.artistImage} />*/}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ player }) {
    return {
        ...player
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTrack(track) {
            dispatch(changeTrack(track))
        },
        generateSound() {
            dispatch(generateSound())
        },
        togglePlay() {
            dispatch(togglePlay())
        },
        updateTime(time) {
            dispatch(updateTime(time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)