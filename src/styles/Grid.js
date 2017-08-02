import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import config, { dimensionNames } from './config'
import media from './media'

const Grid = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    ${props => props.fluid && css`
        padding: ${config.outerMargin + 'rem'};
    `}

    ${props => !props.fluid && css`
        ${dimensionNames.map(size => {
            if (props.offset) {
                return media[size]`
                    width: ${config.gridWidth[size] - props.offset}%;
                `
            }

            return config.gridWidth && media[size]`
                width: ${config.gridWidth[size]}%;
            `
        })}
    `}
`

Grid.displayName = 'Grid'

Grid.propTypes = {
    fluid: PropTypes.bool,
    offset: PropTypes.number // percent
}

export default Grid
