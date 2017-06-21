import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import api from '../services/api'
import SetContainer from './SetContainer'
import InfiniteScrollify from './InfiniteScrollify'
import Spinner from './Spinner'
import { fetchPopularSets, resetSets } from '../actions/sets'

const Sets = InfiniteScrollify(SetContainer)

class Popular extends Base {
    static contextTypes = {
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.autoBind('loadMore')
    }
    componentWillMount() {
        this.context.dispatch(fetchPopularSets())
        
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Popular Sets Page Open")
    }
    componentWillUnmount() {
        this.context.dispatch(resetSets())
    }
    loadMore() {
        this.context.dispatch(fetchPopularSets())
    }
    render() {
        return (
            <div>
                <Sets sets={this.props.sets} loadMore={this.loadMore} />
                <Spinner />
            </div>
        )
    }
}

function mapStateToProps({ sets }) {
    return sets
}

export default connect(mapStateToProps)(Popular)