import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import IconMenu from './IconMenu'
import LoginOverlay from './LoginOverlay'
import Ink from 'react-ink'
import { Button, Icon, colors } from '../styles'
import { logout } from '../actions/auth'
import { toggleModal } from '../actions/environment'

const scrollStyle = {
    backgroundColor: colors.white,
    color: colors.darkGray,
    boxShadow: '0 3px 6px rgba(49, 53, 66, 0.16), 0 3px 6px rgba(49, 53, 66, 0.23)'
}

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        location: PropTypes.object
    };
    static contextTypes = {
        dispatch: PropTypes.func
    };
    login = () => {
        this.context.dispatch(toggleModal())
    }
    trackAndroid = () => {
        mixpanel && mixpanel.track("Android App Link Clicked")
    }
    trackIos = () => {
        mixpanel && mixpanel.track("iOS App Link Clicked")
    }
    handleLogout = () => {
        // logout(this.context.push)
    }
    render() {
        return (
            <div className='Header--landing'>
                <Link to='/' className='icon-setmine' />
                <div className='flex-fixed' style={{ margin: '0 3rem' }}>
                    <h4>{this.props.title}</h4>
                </div>
                <SearchBar />
                {
                    !this.context.loginStatus && (
                        <Button onClick={this.login}>Login</Button>
                    )
                }
                <IconMenu icon={<Icon>ellipsis-h`</Icon>}>
                    <Link to='/about'>
                        <p>About</p>
                    </Link>
                    <a href='http://bit.ly/SetmineiOS' title='view on App Store' className='click'>
                        <p>iOS</p>
                    </a>
                    <a href='http://bit.ly/SetmineAndroid' title='view on Google Play' className='click'>
                        <p>Android</p>
                    </a>
                    <Link to='/setstory'>
                        <p>Setstory</p>
                    </Link>
                    <Link to='/legal'>
                        <p>DMCA Notice</p>
                    </Link>
                    <Link to='/' onClick={this.handleLogout}>
                        <p>Log Out</p>
                    </Link>
                </IconMenu>
            </div>
        )
    }
}
