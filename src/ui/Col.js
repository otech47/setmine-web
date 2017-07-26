import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import config, { dimensionNames } from './config'
import media from './media'

const dimensionPropTypes = dimensionNames.reduce((propTypes, dimension) => {
    propTypes[dimension] = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
    return propTypes
}, {})

const Col = styled.div`
    box-sizing: border-box;
    padding-left: ${config.gutterWidth / 2}rem;
    padding-right: ${config.gutterWidth / 2}rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    ${props => props.reverse && 'flex-direction: column-reverse;'}
    ${props => props.align && css`align-items: ${props.align};`}

    ${props => Object.keys(props)
        .filter(k => ~dimensionNames.indexOf(k))
        .sort((a, b) => dimensionNames.indexOf(a) - dimensionNames.indexOf(b))
        .map(size => media[size]`${
            // props[size] is integer
            Number.isInteger(props[size]) ? `
                flex-basis: ${100 / config.gridSize * props[size]}%;
                max-width: ${100 / config.gridSize * props[size]}%;
                display: flex;
                flex-direction: column;                
            `
                // auto width
                : (props[size] ? `
                    flex-grow: 1;
                    flex-basis: 0;
                    max-width: 100%;
                    display: flex;
                    flex-direction: column;
                `
                    // hide if xs={false}
                    : 'display: none;'
                )
        }`)
    }
`

Col.displayName = 'Col'

Col.propTypes = {
    ...dimensionPropTypes,
    reverse: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch', 'baseline'])
}

export default Col
