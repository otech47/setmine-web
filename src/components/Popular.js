import React from 'react';
import Base from './Base';
import Loader from './Loader';
import api from '../services/api';
import SetContainer from './SetContainer';
import Spinner from './Spinner';
import R from 'ramda';

import { fetchPopularSets, resetSets } from '../actions/sets';

export default class Popular extends Base {
	constructor(props) {
		super(props);
		this.autoBind('getPopularSets', 'onScroll');
	}
	componentWillMount() {
		this.getPopularSets(this.props.page);
	}
	componentDidMount() {
		// mixpanel && mixpanel.track("Popular Sets Page Open");
	}
	componentWillUnmount() {
		this.props.dispatch(resetSets());
	}
	getPopularSets(page) {
		const { dispatch } = this.props;
		dispatch(fetchPopularSets(page));
		// api.get(`sets/popular?limit=48&page=${page}`).then(res => {
		// 	// merge new sets to existing
		// 	let sets = this.state.sets.concat(res.sets_popular);
		// 	sets = R.uniq(sets);
			
		// 	this.setState({
		// 		loaded: true,
		// 		sets: sets,
		// 		page: page + 1
		// 	});
		// });
	}
	onScroll() {
		this.getPopularSets(this.props.page);
	}
	render() {
		return (
			<Loader loaded={this.props.loaded}>
				<SetContainer sets={this.props.sets} onScroll={this.onScroll} />
				<Spinner />
			</Loader>
		);
	}
}