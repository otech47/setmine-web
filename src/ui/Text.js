import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from './colors'

const Text = styled.p`
    font-size: ${props => props.small ? '12' : '16'}px;
    display: block;
    line-height: 22px;
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    margin: ${props => props.margin ? props.margin : 0};
    color: ${props => props.color ? props.color : colors.aegean};
`

Text.propTypes = {
    small: PropTypes.bool,
    margin: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(colors))
}

export default Text