import React, { PropTypes } from 'react'
import Link from 'react-router/lib/Link'
import Base from './Base'
import SearchBar from './SearchBar'
import IconMenu from './IconMenu'
import Icon from './Icon'
import LoginOverlay from './LoginOverlay'
import colors from '../constants/colors'
import Ink from 'react-ink'
import Button from './Button'
// import { Button, Text, Headline } from '../ui'
import { logout } from '../actions/auth'
import { toggleModal } from '../actions/environment'

const scrollStyle = {
    backgroundColor: colors.white,
    color: colors.darkGray,
    boxShadow: '0 3px 6px rgba(49, 53, 66, 0.16), 0 3px 6px rgba(49, 53, 66, 0.23)'
}

export default class Header extends Base {
    constructor(props) {
        super(props)
        this.autoBind(
            'handleLogout',
            'handleScroll',
            'login'
        )
        this.state = {
            switchHeader: false
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.location.pathname !== '/') {
            window.removeEventListener('scroll', this.handleScroll, false)
            return
        }

        if(this.landingPageActive()) {
            window.addEventListener('scroll', this.handleScroll, false)
        }
    }
    login() {
        this.context.dispatch(toggleModal())
    }
    trackAndroid() {
        mixpanel && mixpanel.track("Android App Link Clicked")
    }
    trackIos() {
        mixpanel && mixpanel.track("iOS App Link Clicked")
    }
    landingPageActive() {
        return this.props.location.pathname === '/'
    }
    handleLogout() {
        logout(this.context.push)
    }
    handleScroll() {
        if(!this.landingPageActive()) {
            return
        }

        if(window.scrollY >= (window.innerHeight - 260)) {
            this.setState({ switchHeader: true })
        } else {
            this.setState({ switchHeader: false })
        }
    }
    render() {
        const { currentPage } = this.props
        const headerClass = this.landingPageActive() ? 'Header--landing' : 'Header--main'

        const style = this.state.switchHeader ? scrollStyle : null

        return (
            <div className={headerClass} style={style}>
                <Link to='/' className='icon-setmine' />
                <div className='flex-fixed' style={{ margin: '0 3rem' }}>
                    <h4>{currentPage}</h4>
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
                    <Link to='/' onClick={this.handleLogout.bind(this)}>
                        <p>Log Out</p>
                    </Link>
                </IconMenu>
            </div>
        )
    }
}

Header.contextTypes = {
    push: PropTypes.func,
    loginStatus: PropTypes.bool,
    dispatch: PropTypes.func
}

Header.propTypes = {
    currentPage: PropTypes.string.isRequired,
    location: PropTypes.object
}