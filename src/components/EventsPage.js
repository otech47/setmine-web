import React, {PropTypes} from 'react';
import Loader from 'react-loader';
import Base from './Base';
import IndexLink from 'react-router/lib/IndexLink';
import Link from 'react-router/lib/Link';
import Nav from './Nav';
import Ink from 'react-ink';

export default class EventsPage extends Base {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.context.push({ currentPage: 'Events' });
	}
	componentDidMount() {
		mixpanel.track("Events Page Open");
	}
	render() {
		return (
			<div className='view'>
				<Nav>
					<IndexLink to='/events'>
						<p>UPCOMING</p>
						<Ink />
					</IndexLink>
					<Link to='/events/closest'>
						<p>NEAR YOU</p>
						<Ink />
					</Link>
					<Link to='/events/featured'>
						<p>FEATURED</p>
						<Ink />
					</Link>
				</Nav>
				{
					React.cloneElement(this.props.children, {
						appState: this.props.appState
					})
				}
			</div>
		);
	}
}

EventsPage.contextTypes = {
	push: PropTypes.func
};