import React, { PropTypes } from 'react'
import Base from './Base'
import api from '../services/api'
import SetContainer from './SetContainer'
import Spinner from './Spinner'

import { fetchRecentSets, resetSets } from '../actions/sets'

export default class Recent extends Base {
    static propTypes = {
        sets: PropTypes.array.isRequired
    }
    static contextTypes = {
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.autoBind('loadMore')
    }
    componentWillMount() {
        this.context.dispatch(fetchRecentSets())
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Sets Page Open")
    }
    componentWillUnmount() {
        this.context.dispatch(resetSets())
    }
    loadMore() {
        this.context.dispatch(fetchRecentSets(this.props.page))
    }
    render() {
        return (
            <div>
                <SetContainer sets={this.props.sets} loadMore={this.loadMore} />
                <Spinner />
            </div>
        )
    }
}