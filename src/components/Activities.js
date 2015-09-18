import React from 'react';
import Loader from 'react-loader';
import constants from '../constants/constants';
import ActivityTile from './ActivityTile';

var TITLE = 'Activities';
var TYPE = 'activity';
var Activities = React.createClass({

	getInitialState: function() {
		return {
			loaded: false
		};
	},
	componentWillMount: function() {
		this.getActivities();
	},
	getActivities: function() {
		var _this = this;
		var push = this.props.push;
		var results,
			activityUrl = constants.API_ROOT + 'activity';

		$.ajax({
			url: activityUrl,
			type: 'get'
		})
		.done(function(response) {
			results = response.payload.activity;
			push({
				type: 'SHALLOW_MERGE',
				data: {
					activityBrowseData: results
				}
			});

			_this.setState({
				loaded: true
			});
		});
	},
	render: function() {
		var push = this.props.push;
		var appState = this.props.appState.get('activityBrowseData');
		var containerClass = 'flex-row scrollable results-container';

		var tiles = appState.map(function(activity, index) {
			var props = {
				activity: activity.activity,
				key: index,
				id: activity.id,
				set_ids: activity.set_ids,
				imageURL: activity.imageURL,
				push: push
			}
			
			return <ActivityTile {...props} />
		});

		return (
			<Loader loaded={this.state.loaded}>
				<div className={containerClass}>
					{tiles}
				</div>
			</Loader>
		);
	}

});

module.exports = Activities;