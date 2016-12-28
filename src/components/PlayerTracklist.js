import React, { PropTypes } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Track from './Track'
import Base from './Base'

export default class PlayerTracklist extends Base {
    constructor(props) {
        super(props)
        this.autoBind('animate', 'updateCurrentTrack')
        this.state = {
            open: false
        }
    }
    animate() {
        this.setState({ open: !this.state.open })
    }
    updateCurrentTrack() {
        // updateCurrentTrack(this.props.appState, this.context.push)
    }
    render() {
        const currentTrack = this.props.currentTrack
        const tracks = this.props.tracks.map((track, index) => {
            return React.createElement(Track, {
                key: index,
                trackname: track.trackname,
                starttime: track.starttime,
                className: track.trackname === currentTrack && 'Track__active',
                onClick: this.props.changeTrack
            })
        })

        return (
            <div className='PlayerTracklist flex-row flex-fixed'>
                <p className='active-track flex-fixed-3x' onClick={this.animate}>
                    {currentTrack}
                </p>
                <Motion style={{ yshift: spring(this.state.open ? 10 : -50, presets.gentle) }}>
                    {
                        ({yshift}) =>
                        <div className='PlayerTracklist__tracks' onMouseLeave={this.animate} style={{
                            bottom: `${yshift}vh`
                        }}>
                            {tracks}
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}