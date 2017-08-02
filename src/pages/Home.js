import React, { Component, PropTypes } from 'react'

export default class Home extends Component {
    static contextTypes =  {
        dispatch: PropTypes.func
    }
    componentWillMount() {
        this.context.dispatch({ currentPage: 'Setmine' })
    }
    componentDidMount() {
        mixpanel.track("User Home Page Open")
    }
    render() {
        return (
            <div className='view'>
                { React.cloneElement(this.props.children) }
            </div>
        )
    }
}
