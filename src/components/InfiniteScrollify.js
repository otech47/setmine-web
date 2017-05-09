import React, {PropTypes} from 'react'
import Base from './Base'

export default function(InnerComponent) {
	class InfiniteScrollify extends Base {
		static propTypes = {
			onScroll: PropTypes.func.isRequired
		}
		constructor(props) {
			super(props)
			this.autoBind(
				'onScroll',
				'attachScrollListener',
				'detachScrollListener'
			)
		}
		componentDidMount() {
			this.attachScrollListener()
		}
		componentWillUnmount() {
			this.detachScrollListener()
		}
		componentDidUpdate() {
			this.attachScrollListener()
		}
		attachScrollListener() {
			window.addEventListener('scroll', this.onScroll, true)
		}
		detachScrollListener() {
			window.removeEventListener('scroll', this.onScroll, true)
		}
		onScroll() {
			// console.log('distance scrolled', window.scrollY)
			// console.log('window inner height', window.innerHeight)
			// console.log('total page height', document.body.offsetHeight)

			if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
				this.detachScrollListener()
				this.props.onScroll()
			}
		}
		render() {
			return <InnerComponent {...this.props} />
		}
	}

	return InfiniteScrollify
}