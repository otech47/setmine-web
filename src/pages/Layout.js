import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

class Layout extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        clearHeader: PropTypes.bool,
        footer: PropTypes.bool,
        hideSidebar: PropTypes.bool,
    };
    static defaultProps = {
        clearHeader: false,
        footer: false
    };
    render() {
        const {
            currentPage,
            clearHeader,
            footer,
            playerVisible,
            showModal,
            hideSidebar,
            children,
            title
        } = this.props

        return (
            <div>
                <Header clearHeader={clearHeader} currentPage={curentPage} title={title} />
                {!hideSidebar && <Sidebar />}
                {children}
                {footer && <Footer />}
                {playerVisible && <Player />}
                {
                    // notification
                    // login
                }
            </div>
        )
    }
}

function mapStateToProps({ environment }) {
    return environment
}

export default connect(mapStateToProps)(Layout)
