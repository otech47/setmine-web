import React, { PropTypes } from 'react'
import Base from './Base'
import Icon from './Icon'
import { S3_ROOT_FOR_IMAGES } from '../constants/constants'

export default class PlayButton extends Base {
    constructor(props) {
        super(props)
        this.autoBind('togglePlay', 'handleKeydown')
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
    }
    handleKeydown(e) {
        const key = e.keyCode || e.which
        const isInsideInput = e.target.tagName.toLowerCase().match(/input|textarea/)
        if(isInsideInput) {
            return
        }

        switch(true) {
            case key === 32:
                e.preventDefault()
                this.togglePlay()
                break
            case (key === 37):
                // TODO prev track
                e.preventDefault()
                break
            case (key === 39):
                // TODO next track
                e.preventDefault()
                break
        }
    }
    togglePlay() {
        this.props.togglePlay()
    }
    render() {
        const playerIcon = this.props.isPlaying ? 'pause' : 'play'
        const image = {
            backgroundImage: `url('${S3_ROOT_FOR_IMAGES + this.props.currentSet.artistImage}')`
        }

        return (
            <div 
                className='PlayButton' 
                onMouseUp={this.togglePlay} 
                style={image}
            >
                <Icon>{playerIcon}</Icon>
            </div>
        )
    }
}