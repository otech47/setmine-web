import React from 'react';
import Icon from './Icon';

var Header = React.createClass({

	render() {
		var title = this.props.appState.get('title');
		return (
			<div className='flex-row'>
				<div className='logo'>Setpay</div>
				<div className='title flex-row'>
					<Icon style>people</Icon>
					<p>{title}</p>
				</div>
			</div>
		);
	}

});

module.exports = Header;