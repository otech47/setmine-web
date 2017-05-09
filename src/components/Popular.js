import React, { PropTypes } from 'react'
import Base from './Base'
import Loader from './Loader'
import api from '../services/api'
import SetContainer from './SetContainer'
import Spinner from './Spinner'

import { fetchPopularSets, resetSets } from '../actions/sets'
import { showLoader } from '../actions/environment'

export default class Popular extends Base {
    static contextTypes = {
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.autoBind('getPopularSets', 'onScroll')
    }
    componentWillMount() {
        this.context.dispatch(showLoader(true))
        this.getPopularSets(this.props.page)
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Popular Sets Page Open")
    }
    componentWillUnmount() {
        this.context.dispatch(resetSets())
    }
    getPopularSets(page) {
        this.context.dispatch(fetchPopularSets(page))
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