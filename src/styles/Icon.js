import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from './colors'

const Icon = styled.i`
    margin: 1rem;
    cursor: ${props => props.onClick ? 'pointer' : 'default'};
    text-align: ${props => props.fixed ? 'center' : 'initial'};
    font-size: ${props => props.size}px;
    color: ${props => colors[props.color]}
`

Icon.defaultProps = {
    size: 18,
    color: 'white'
}

Icon.propTypes = {
    size: PropTypes.number,
    className: PropTypes.string.isRequired,
    color: PropTypes.string,
    fixed: PropTypes.bool,
    onClick: PropTypes.func
}

export default Icon
