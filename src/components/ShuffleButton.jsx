import React, { PropTypes } from 'react'
import Base from './Base'
import { shuffle } from '../actions/player'

export default class ShuffleButton extends Base {
	constructor(props) {
		super(props)
		this.autoBind('shuffle')
	}
	shuffle() {
		const { sets, dispatch } = this.props
		dispatch(shuffle(sets))
	}
	render() {
		return (
			<p className='DetailButton' onClick={this.shuffle}>SHUFFLE</p>
		)
	}
}

ShuffleButton.propTypes = {
	setIds: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
}
