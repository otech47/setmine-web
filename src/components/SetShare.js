import React, { PropTypes } from 'react'
import Base from './Base'
import CopyToClipboard from 'react-copy-to-clipboard'
import Icon from './Icon'

import { favoriteSet } from '../services/favoriteSet'
import { shareToFacebook, shareToTwitter } from '../services/share'

export default class SetShare extends Base {
	constructor(props) {
		super(props)
		this.autoBind('handleCopy', 'favoriteSet', 'shareToFacebook', 'shareToTwitter')
		this.playURL = `https://setmine.com/play/${props.id}`
		this.state = {
			favorited: props.favorited
		}
	}
	handleCopy() {
		// this.context.push({
		// 	snackbar: {
		// 		open: true,
		// 		message: 'Copied to Clipboard!'
		// 	}
		// })
	}
	favoriteSet() {
		// const { user, loginStatus, push } = this.context
		// if(!loginStatus) {
		// 	push({ showLogin: true })
		// 	return
		// }

		// favoriteSet(this.props.id, user.id, push)
		this.setState({ favorited: !this.state.favorited }, () => {
			console.log('favorited', this.props.id)
			// dispatch(favoriteSet(id))
		})
	}
	shareToFacebook() {
		// shareToFacebook(this.props.id, this.props.artistImage)
	}
	shareToTwitter() {
		// shareToTwitter(this.props.id)
	}
	render() {
		const favorite = this.state.favorited ? 'heart' : 'heart-o'

		return (
			<div className='SetShare flex-row'>
				<Icon onClick={this.favoriteSet} title='Favorite Set'>{favorite}</Icon>
				<CopyToClipboard text={this.playURL} onCopy={this.handleCopy}>
					<Icon title='Copy to Clipboard'>clipboard</Icon>
				</CopyToClipboard>
				<Icon onClick={this.shareToFacebook} fixed title='Share on Facebook'>facebook</Icon>
				<Icon onClick={this.shareToTwitter} fixed title='Share on Twitter'>twitter</Icon>
			</div>
		)
	}
}

SetShare.contextTypes = {
	push: PropTypes.func,
	user: PropTypes.object,
	loginStatus: PropTypes.bool
}

SetShare.propTypes = {
	favorited: PropTypes.bool,
	id: PropTypes.number,
	artistImage: PropTypes.string
}