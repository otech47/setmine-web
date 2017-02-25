import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from './colors'
import { colorize } from './mixins'

const Title = styled.h2`
    font-size: 22px;
    -webkit-margin-before: 1rem;
    -webkit-margin-after: 1rem;
    color: ${props => colorize(props.color)}
`

Title.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors))
}

export default Title