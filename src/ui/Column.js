import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`

Column.propTypes = {
    reverse: PropTypes.bool,
    nowrap: PropTypes.bool
}

Column.defaultProps = {
    reverse: false,
    wrap: false
}

export default Column