import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loader from './Loader'
import DetailHeader from './DetailHeader'
import ShuffleButton from './ShuffleButton'
import Tabs from './Tabs'
import Tab from './Tab'
import { fetchArtist } from '../actions/artists'

import { changeCurrentPage } from '../actions/environment'

const tabStyle = {
	position: 'relative',
	top: 0
}

class ArtistDetail extends Component {
	static contextTypes = {
		dispatch: PropTypes.func
	}
	componentWillMount() {
		const query = this.props.params.artist.split('_').join('%20')

		this.context.dispatch(changeCurrentPage(this.props.params.artist))
		this.context.dispatch(fetchArtist(query))
	}
	render() {
		const setText = this.props.setCount != 1 ? 'sets' : 'set'
		const eventText = this.props.eventCount != 1 ? 'events' : 'event'
		const artistInfo = `${this.props.setCount} ${setText} | ${this.props.eventCount} ${eventText}`

		const setIds = this.props.sets.map(set => {
			return set.id
		})

		return (
			<Loader loading={this.props.loading}>
				<div className='detail-view'>
					<DetailHeader image={this.props.image}>
						<h3>{this.props.artist}</h3>
						<h5>{artistInfo}</h5>
						<ShuffleButton setIds={setIds} />
					</DetailHeader>
					{/*<Tabs type='detail' style={tabStyle}>
						<Tab to={`/artist/${this.props.params.artist}`} index>SETS</Tab>
						<Tab to={`/artist/${this.props.params.artist}/events`}>EVENTS</Tab>
					</Tabs>*/}
					{
						React.cloneElement(this.props.children, {
							sets: this.props.sets,
							events: this.props.events
						})
					}
				</div>
			</Loader>
		)
	}
}

function mapStateToProps({ artists, environment }) {
	return {
		loading: environment.loading,
		...artists.artist
	}
}

export default connect(mapStateToProps)(ArtistDetail)