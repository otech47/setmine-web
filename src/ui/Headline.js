import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from './colors'

const Headline = styled.h4`
    font-size: 24px;
    font-weight: 400;
    line-height: 39px;
    color: ${props => props.color ? props.color : colors.aegean};
`

export default Headline