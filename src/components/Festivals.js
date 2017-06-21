import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FestivalContainer from './FestivalContainer'
import Base from './Base'
import Spinner from './Spinner'
import { fetchFestivals, resetEvents } from '../actions/events'

class Festivals extends Base {
	static contextTypes = {
		dispatch: PropTypes.func
	}
	constructor(props) {
		super(props)
		this.autoBind('fetchFestivals')
	}
	componentWillMount() {
		this.fetchFestivals()
	}
	componentDidMount() {
		// mixpanel && mixpanel.track("Festivals Page Open")
	}
	componentWillUnmount() {
		this.context.dispatch(resetEvents())
	}
	fetchFestivals() {
		this.context.dispatch(fetchFestivals())
	}
	render() {
		return (
			<div>
				<FestivalContainer events={this.props.events} loadMore={this.fetchFestivals} />
				<Spinner />
			</div>
		)
	}
}

function mapStateToProps({ events }) {
    return events
}

export default connect(mapStateToProps)(Festivals)