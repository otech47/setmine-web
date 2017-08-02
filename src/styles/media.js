import { css } from 'styled-components'
import { breakpoints } from './config'

const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)}
        }
    `;

    return acc;
}, {})

export default media
