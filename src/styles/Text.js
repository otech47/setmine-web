import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import colors from './colors'

const Text = styled.p`
    font-size: ${props => props.size}px;
    display: block;
    line-height: ${props => props.size * 1.6}px;
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    ${props => props.margin && css`margin: ${props.margin}`};
    color: ${props => props.color ? props.color : colors.aegean};
    ${props => props.align && css`text-align: ${props.align};`}
    ${props => props.lines && css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        max-height: ${props.size * 1.25 * props.lines}px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    `}
`

Text.propTypes = {
    size: PropTypes.oneOf([12, 16, 20, 24, 34, 45, 56]),
    margin: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(colors)),
    align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    lines: PropTypes.number
}

export default Text
