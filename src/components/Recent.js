import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import api from '../services/api'
import SetContainer from './SetContainer'
import InfiniteScrollify from './InfiniteScrollify'
import Spinner from './Spinner'

import { fetchRecentSets, resetSets } from '../actions/sets'

const Sets = InfiniteScrollify(SetContainer)

class Recent extends Base {
    static propTypes = {
        sets: PropTypes.array.isRequired
    }
    static contextTypes = {
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.autoBind('fetchSets')
    }
    componentWillMount() {
        this.fetchSets()
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Sets Page Open")
    }
    componentWillUnmount() {
        this.context.dispatch(resetSets())
    }
    fetchSets() {
        this.context.dispatch(fetchRecentSets())
    }
    render() {
        return (
            <div>
                <Sets sets={this.props.sets} loadMore={this.fetchSets} />
                <Spinner />
            </div>
        )
    }
}

function mapStateToProps({ sets }) {
    return sets
}

export default connect(mapStateToProps)(Recent)