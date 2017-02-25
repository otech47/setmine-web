import React, { Component, PropTypes } from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import Ink from 'react-ink'
import { connect } from 'react-redux'
import { changeCurrentPage } from '../actions/environment'

class Sets extends Component {
    static contextTypes = {
        dispatch: PropTypes.func
    }
    componentWillMount() {
        this.context.dispatch(changeCurrentPage('Sets'))
    }
    render() {
        const { sets, environment } = this.props
        return (
            <div className='view'>
                {
                    React.cloneElement(this.props.children, {
                        ...sets,
                        ...environment
                    })
                }
            </div>
        )
    }
}

function mapStateToProps({ sets, environment }) {
    return {
        sets,
        environment
    }
}

export default connect(mapStateToProps)(Sets)