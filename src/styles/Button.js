import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import Ink from 'react-ink'
import colors from './colors'
import { createBoxShadow } from './mixins'
import Text from './Text'

const Root = styled.button`
    ${createBoxShadow(1)}
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    height: 30px;
    margin: 1rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    font-family: Avenir Light;
    font-size: 16px;
    color: ${props => props.transparent ? colors[props.color] : 'white'};
    background: ${props => props.transparent ? 'transparent' : colors[props.background]};
    overflow: visible;
    letter-spacing: 1px;
    ${props => props.transparent && css`solid 1px ${colors[props.color]}`};
`

function Button(props) {
    return (
        <Root {...props}>
            <Text>{props.children}</Text>
            <Ink />
        </Root>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    background: PropTypes.oneOf(Object.keys(colors)),
    color: PropTypes.oneOf(Object.keys(colors)),
    children: PropTypes.any.isRequired,
    transparent: PropTypes.bool
}

Button.defaultProps = {
    background: colors.blue,
    transparent: false
}

export default Button