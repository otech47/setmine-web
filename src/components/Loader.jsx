import React, { Component, PropTypes } from 'react'
import Spinner from './Spinner'

export default class Loader extends Component {
    static propTypes = {
        loaded: PropTypes.bool.isRequired,
        children: PropTypes.any.isRequired
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.loaded) {
            return true
        } else {
            return false
        }
    }
    render() {
        if(!this.props.loaded) {
            return (
                <div id='Loader'>
                    <Spinner />
                </div>
            )
        } else {
            return (
                <div className='loaded-content'>
                    {this.props.children}
                </div>
            )
        }
    }
}