import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from './colors'

const Display = styled.h1`
    font-family: Avenir Roman;
    ${props => {
        switch(true) {
            case props.sm:
                return `
                    font-size: 56px;
                    font-weight: 400;
                    line-height: 64px;
                `
            case props.md:
                return `
                    font-size: 45px;
                    font-weight: 400;
                    line-height: 64px;
                `
            case props.lg:
                return `
                    font-size: 34px;
                    font-weight: 400;
                    line-height: 52px;
                `
            default: 
                return `
                    font-size: 56px;
                    font-weight: 400;
                    line-height: 64px;
                `
        }
    }}
`

Display.propTypes = {
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool
}

export default Display