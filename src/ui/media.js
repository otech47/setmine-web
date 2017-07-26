import { css } from 'styled-components';
import { sizes } from './config';

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)}
        }
    `;

    acc.lg = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});

export default media;
