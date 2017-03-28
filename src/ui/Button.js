import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Ink from 'react-ink'
import colors from './colors'
import { card } from './mixins'
import Text from './Text'

const Root = styled.button`
    ${card(1)}
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
    border: ${props => props.transparent ? 'solid 1px' : 'none'};
    border-color: ${props => colors[props.color] && colors[props.color]};    
`

function Button({ children, onClick }) {
    return (
        <Root onClick={onClick}>
            <Text>{children}</Text>
            <Ink />
        </Root>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    background: PropTypes.oneOf(Object.keys(colors)),
    color: PropTypes.oneOf(Object.keys(colors)),
    children: PropTypes.any.isRequired,
    solid: PropTypes.bool
}

Button.defaultProps = {
    background: colors.blue,
    transparent: false
}

export default Button