import React, { PropTypes } from 'react'
import styled from 'styled-components'
import colors from './colors'
import { card } from './mixins'

const Button = styled.button`
    ${card(1)}
    position: relative;
    display: flex;
    height: 36px;
    background: ${colors.blue};
    color: white;
    margin: 1rem;
    padding: 1rem 4rem;
    -webkit-user-select: none;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    outline: 0;
    border: none;
    font-size: 1.5rem;
`

Button.propTypes = {
    onClick: PropTypes.func,
    // className: PropTypes.string,
    children: PropTypes.any.isRequired
}

export default Button