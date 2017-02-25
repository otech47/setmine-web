import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    ${props => props.align ? css`align-items: ${props.align};` : ''}
    ${props => props.justify ? css`justify-content: ${props.justify};` : ''}
`

Row.propTypes = {
    reverse: PropTypes.bool,
    nowrap: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch', 'baseline']),
    justify: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch', 'space-around', 'space-between'])
}

export default Row