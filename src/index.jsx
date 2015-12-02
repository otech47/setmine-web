// react stuff
import React from 'react';
import Router from 'react-router';
import { IndexRoute, Link, Route, History, Redirect } from 'react-router';

// modules
import GlobalEventHandler from './services/globalEventHandler';
import R from 'ramda';
import Immutable from 'immutable';
import constants from './constants/constants';

// components
import Sandbox from './components/Sandbox';
import Header from './components/Header';

var initialAppState = Immutable.Map({
	title: 'TestSHIT'
});

var evtHandler = GlobalEventHandler(initialAppState);
var evtTypes = evtHandler.types;

var push = evtHandler.push;

var App = React.createClass({

	mixins: [History],

	getInitialState() {
		return {
			appState: initialAppState
		};
	},

	componentWillMount() {
		this.initializeApp();
	},

	initializeApp() {
		var self = this;
		evtHandler.floodGate.subscribe(newState => {
			self.setState({ appState: newState });
		});
	},

	render() {
		var appState = this.state.appState;
		return (
			<div id='App' className='flex-column'>
				<Header appState={appState}/>
				{
					React.cloneElement(this.props.children, {
						appState: appState,
						push: push
					})
				}
			</div>
		);
	}
});

var routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Sandbox}/>
	</Route>
);


var headMount = document.getElementById('head-mount-point');
var bodyMount = document.getElementById('body-mount-point');

// import createBrowserHistory from 'history/lib/createBrowserHistory';
// var history = createBrowserHistory();
import createHashHistory from 'history/lib/createHashHistory';
var history = createHashHistory();

React.render(
	<Router history={history}>
		{routes}
	</Router>
, bodyMount);
