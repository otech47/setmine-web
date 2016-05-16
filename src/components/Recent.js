import React, {PropTypes} from 'react';
import Base from './Base';
import Loader from './Loader';
import api from '../services/api';
import SetContainer from './SetContainer';
import Spinner from './Spinner';

import { fetchRecentSets, resetSets } from '../actions/sets';

const {array, bool, number} = PropTypes;

export default class Recent extends Base {
    static propTypes = {
        sets: array,
        loaded: bool,
        page: number
    }
    constructor(props) {
        super(props);
        this.autoBind('getRecentSets', 'onScroll');
    }
    componentWillMount() {
        this.getRecentSets(this.props.page);
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Sets Page Open");
    }
    componentWillUnmount() {
        this.props.dispatch(resetSets());
    }
    getRecentSets(page) {
        const { dispatch } = this.props;
        dispatch(fetchRecentSets(page));
    }
    onScroll() {
        this.getRecentSets(this.props.page);
    }
    render() {
        const { sets, loaded } = this.props;
        return (
            <Loader loaded={loaded}>
                <SetContainer sets={sets} onScroll={this.onScroll}/>
                <Spinner />
            </Loader>
        );
    }
}