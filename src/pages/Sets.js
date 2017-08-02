import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import Layout from './Layout'
import { Page } from '../styles'

const Sets = props => (
    <Page>
        {
            props.routes.map((route, i) => (
                <Route key={i} component={route.component} />
            ))
        }
    </Page>
)

function mapStateToProps({ environment }) {
    return environment
}

export default withRouter(connect(mapStateToProps)(props => (
    <Layout title={props.title}><Sets {...props} /></Layout>
)))
