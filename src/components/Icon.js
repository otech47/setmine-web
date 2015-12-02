import React from 'react';
import Radium from 'radium';

var Icon = React.createClass({

	getDefaultProps() {
		return {
			style: []
		};
	},

	render() {
		return (
			<i className='material-icons' style={[this.props.style]}>{this.props.children}</i>
		);
	}

});

// class Icon extends Component {
// 	static defaultProps = {
// 		style: []
// 	}
// 	render() {
// 		return (
// 			<i className='material-icons' style={[this.props.style]}>{this.props.children}</i>
// 		);
// 	}
// }

module.exports = Radium(Icon);