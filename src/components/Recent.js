import React, {PropTypes} from 'react'
import Base from './Base'
import Loader from './Loader'
import api from '../services/api'
import SetContainer from './SetContainer'
import Spinner from './Spinner'

import { fetchRecentSets, resetSets } from '../actions/sets'

export default class Recent extends Base {
    static propTypes = {
        sets: PropTypes.array.isRequired,
        loaded: PropTypes.bool.isRequired,
        page: PropTypes.number.isRequired
    }
    static contextTypes = {
        dispatch: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.autoBind('getRecentSets', 'onScroll')
    }
    componentWillMount() {
        this.getRecentSets(this.props.page)
    }
    componentDidMount() {
        // mixpanel && mixpanel.track("Sets Page Open")
    }
    componentWillUnmount() {
        this.context.dispatch(resetSets())
    }
    getRecentSets(page) {
        this.context.dispatch(fetchRecentSets(page))
    }
    onScroll() {
        this.getRecentSets(this.props.page)
    }
    render() {
        const { sets, loaded } = this.props
        return (
            <Loader loaded={loaded}>
                <SetContainer sets={sets} onScroll={this.onScroll}/>
                <Spinner />
            </Loader>
        )
    }
}