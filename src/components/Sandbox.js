import React from 'react';
import R from 'ramda';
import Icon from './Icon';

var Sandbox = React.createClass({
	
	render: function() {
		var push = this.props.push;
		var appState = this.props.appState;

		return (
			<div className='sandbox'>
				<p className='center'>
					>tfw new website
					<br/>
					>tfw react.js master race
					<br/>
					>tfw jediscript can't melt steal beams
					<br/>
				</p>
			</div>
		);
	}

});

module.exports = Sandbox;