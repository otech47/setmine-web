import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import api from '../services/api'
import Base from './Base'
import Icon from './Icon'

import { search } from '../actions/search'

export default class SearchBar extends Base {
    static contextTypes = {
        dispatch: PropTypes.func,
        router: PropTypes.object
    }
    constructor(props) {
        super(props)
        this.autoBind('handleKeyPress', 'handleChange')
        this.state = {
            value: ''
        }
    }
    handleChange(e) {
        const value = e.target.value
        this.setState({ value })
    }
    handleKeyPress(e) {
        const value = this.state.value
        const key = e.keyCode || e.which

        if (value.length !== 0 && key === 13) {
            console.log('searching...')
            this.context.router.push({
                pathname: '/search',
                query: {
                    q: this.state.value
                }
            })
        }
    }
    render() {
        return (
            <div className='SearchBar'>
                <Icon>search</Icon>
                <input
                    className='SearchBar__input'
                    placeholder='search'
                    // ref={input => this.input = input}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.value}
                />
            </div>
        )
    }
}
