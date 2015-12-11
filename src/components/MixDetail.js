import React from 'react';
import Loader from 'react-loader';
import {API_ROOT} from '../constants/constants';

import SetContainer from './SetContainer';
import DetailImageContainer from './DetailImageContainer';

var MixDetail = React.createClass({

	displayName: 'MixDetail',
	getInitialState() {
		return {
			loaded: false
		};
	},

	componentWillMount() {
		this.getMixData();
	},

	getMixData() {
		var push = this.props.push;
		var mix = this.props.params.mix;
		var query = mix.split('-').join('%20');

// TODO use mix id to get mix data test: 69
		var mixData,
			mixUrl = API_ROOT + 'mixes/search/' + query;

		$.ajax({
			url: mixUrl,
			type: 'get',
		})
		.done(res => {
			mixData = res.payload.mix;

			push({
				type: 'SHALLOW_MERGE',
				data: {
					detailId: mixData.id,
					detailData: mixData
				}
			});

			this.setState({
				loaded: true
			});
		});
	},

	render() {
		var push = this.props.push;
		var appState = this.props.appState;

		var detailData = appState.get('detailData');
		var loginStatus = appState.get('isUserLoggedIn');
		var user = appState.get('user');

		var setText = detailData.set_count != 1 ? 'sets' : 'set';
		var info = `${detailData.set_count} ${setText}`;

		var detailInfo = {
			push: push,
			title: detailData.event,
			imageURL: detailData.banner_image.imageURL,
			info: info
		};
		
		var sets = {
			sets: detailData.sets,
			push: push,
			loginStatus: loginStatus,
			user: user
		};

		return (
			<Loader loaded={this.state.loaded}>
				<div id='detail' className='detail-page'>
					<DetailImageContainer {...detailInfo}/>
					<div className='flex-row links-container'>
						<div className='center flex-fixed'>
							SETS
						</div>
					</div>
					<SetContainer {...sets} />
				</div>
			</Loader>
		);
	}

});

module.exports = MixDetail;