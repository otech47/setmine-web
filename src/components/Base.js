import React, { Component } from 'react'

export default class Base extends Component {
	autoBind(...methods) {
		methods.forEach(method => this[method] = this[method].bind(this))
	}
}