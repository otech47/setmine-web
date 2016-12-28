import React from 'react'
import Base from './Base'
import Loader from './Loader'
import api from '../services/api'
import SetContainer from './SetContainer'
import Spinner from './Spinner'

import { fetchPopularSets, resetSets } from '../actions/sets'

export default class Popular extends Base {
    constructor(props) {
        super(props)
        this.autoBind('getPopularSets', 'onScroll')
    }
    componentWillMount() {
        this.getPopularSets(this.props.page)
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Popular Sets Page Open")
    }
    componentWillUnmount() {
        this.props.dispatch(resetSets())
    }
    getPopularSets(page) {
        const { dispatch } = this.props
        dispatch(fetchPopularSets(page))
    }
    onScroll() {
        this.getPopularSets(this.props.page)
    }
    render() {
        return (
            <Loader loaded={this.props.loaded}>
                <SetContainer sets={this.props.sets} onScroll={this.onScroll} />
                <Spinner />
            </Loader>
        )
    }
}