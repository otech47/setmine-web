import React, { Component, PropTypes } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
// import Base from './Base'
import Nav from './Nav'
import Ink from 'react-ink'
import { connect } from 'react-redux'
import { changeCurrentPage } from '../actions/environment'

class Sets extends Component {
	componentWillMount() {
		// this.context.push({ currentPage: 'Sets' })
		this.props.dispatch(changeCurrentPage('Sets'))
	}
	render() {
		const { dispatch, sets } = this.props
		console.log(sets)
		return (
			<div className='view'>
				<Nav>
					<IndexLink to='/sets'>
						<p>RECENT</p>
						<Ink />
					</IndexLink>
					<Link to='/sets/popular'>
						<p>POPULAR</p>
						<Ink />
					</Link>
					<Link to='/sets/festivals'>
						<p>FESTIVALS</p>
						<Ink />
					</Link>
					<Link to='/sets/mixes'>
						<p>MIXES</p>
						<Ink />
					</Link>
				</Nav>
				{
					React.cloneElement(this.props.children, {
						dispatch,
						...sets
					})
				}
			</div>
		)
	}
}

Sets.contextTypes = {
	push: PropTypes.func
}

function mapStateToProps(state) {
	const { sets } = state
	return {
		sets
	}
}

export default connect(mapStateToProps)(Sets)