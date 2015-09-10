import React from 'react';
import Loader from 'react-loader';
import constants from '../constants/constants';
import EventContainer from './EventContainer';

var NewEvents = React.createClass({

	getInitialState: function() {
		return {
			loaded: false
		};
	},
	componentWillMount: function() {
		this.getNewEvents();
	},
	getNewEvents: function() {
		var _this = this;
		var userId = this.props.appState.get('userId');
		var push = this.props.push;
		var results,
			newEventsUrl = constants.API_ROOT + 'user/stream/' + userId + '?filter=upcoming';

		$.ajax({
			url: newEventsUrl,
			type: 'get'
		})
		.done(function(response) {
			results = response.payload.user.stream;

			push({
				type: 'SHALLOW_MERGE',
				data: {
					newEvents: results
				}
			});

			_this.setState({
				loaded: true
			});
		});
	},
	render: function() {
		var newEvents = this.props.appState.get('newEvents');
		var containerId = 'NewEvents';

		return (
			<Loader loaded={this.state.loaded}>
				<EventContainer
					containerClass={this.props.containerClass}
					containerId={containerId}
					events={newEvents}
					push={this.props.push}
				/>
			</Loader>
		);
	}

});

module.exports = NewEvents;