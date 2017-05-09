import React, { Component, PropTypes } from 'react'
import Spinner from './Spinner'

export default function Loader({ loading, children }) {
    if(loading) {
        return (
            <div className='Loader'>
                <Spinner />
            </div>
        )
    } else {
        return (
            <div className='loading-content'>
                {children}
            </div>
        )
    }
}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}