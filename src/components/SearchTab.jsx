import React, { PropTypes } from 'react'
import Base from './Base'
import { Link } from 'react-scroll'
import Ink from 'react-ink'
import styled from 'styled-components'
import { colors } from '../ui'

const Root = styled(Link)`
    position: relative;
    background: ${colors.cloud};
    color: ${colors.aegean};
    padding: 1rem 2rem;
    text-align: center;
`

export default class SearchTab extends Base {
    constructor(props) {
        super(props)
        this.autoBind('handleClick')
    }
    handleClick(e) {
        this.props.onClick(null, e, this) // changes inkbar position
    }
    render() {
        const { width, children, to, duration, offset, tabIndex } = this.props

        return (
            <Root
                to={to}
                style={{ width: width.toString() + '%'}}
                onClick={this.handleClick}
                spy
                smooth
                offset={offset}
                duration={duration}
            >
                <p>{children.toUpperCase()}</p>
                <Ink />
            </Root>
        )
    }
}

SearchTab.propTypes = {
    width: PropTypes.number,
    children: PropTypes.string,
    onClick: PropTypes.func
}

SearchTab.defaultProps = {
    offset: -112,
    duration: 200
}