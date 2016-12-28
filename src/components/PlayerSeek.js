import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { MMSSToMilliseconds } from '../services/formatUtils'
import Base from './Base'

export default class PlayerSeek extends Base {
    constructor(props) {
        super(props)
        this.autoBind(
            'scrub', 
            'offsetLeft', 
            'bindSeekMouseEvents', 
            'handleSeekMouseDown', 
            'handleSeekMouseUp'
        )
        this.state = {
            isSeeking: false
        }
    }
    bindSeekMouseEvents() {
        document.addEventListener('mousemove', this.scrub)
        document.addEventListener('mouseup', this.handleSeekMouseUp)
    }
    offsetLeft(el) {
        let x = el.offsetLeft
        while(el.offsetParent) {
            x += el.offsetParent.offsetLeft
            el = el.offsetParent
        }
        return x
    }
    handleSeekMouseDown(e) {
        this.bindSeekMouseEvents()
        this.setState({
            isSeeking: true
        })
    }
    handleSeekMouseUp(e) {
        if(!this.state.isSeeking) {
            return
        }

        // remove event listeners
        document.removeEventListener('mousemove', this.scrub)
        document.removeEventListener('mouseup', this.handleSeekMouseUp)

        this.setState({
            isSeeking: false
        })
    }
    scrub(e) {
        const { sound } = this.props
        const seekBar = ReactDOM.findDOMNode(this.refs.scrubber)
        const offsetLeft = this.offsetLeft(seekBar)

        // // le scrub 2.0
        const newPosition = ((e.clientX - offsetLeft) / (window.innerWidth - offsetLeft)) * 100
        const setLength = sound.durationEstimate
        const timeElapsed = (newPosition * setLength) / 100

        // // console.log('clicked point x-coord', e.clientX)
        // // console.log('offsetleft', offsetLeft)
        // // console.log('new position', newPosition)
        
        this.props.updateTime(timeElapsed)
        sound.setPosition(timeElapsed)
    }
    render() {
        let { timeElapsed, sound } = this.props

        // use soundmanager to guess set length
        timeElapsed = MMSSToMilliseconds(timeElapsed)
        const setLength = sound ? sound.durationEstimate : 0
        const percent = (timeElapsed / setLength) * 100

        return (
            <div 
                className='PlayerSeek' 
                ref='scrubber' 
                onClick={this.scrub}
            >
                <div 
                    className='PlayerSeek__time-elapsed' 
                    style={{ width: percent+'%' }}
                >
                    <div 
                        className='PlayerSeek__handle'
                        onClick={this.handleMouseClick}
                        onMouseDown={this.handleSeekMouseDown}
                    />
                </div>
            </div>
        )
    }
}
