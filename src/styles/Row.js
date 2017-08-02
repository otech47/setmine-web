import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    ${props => props.justify && css`justify-content: ${props.justify}`};
    ${props => props.align && css`align-items: ${props.align}`};
    ${props => props.margin && css`margin: ${props.margin}`};
    ${props => props.reverse && 'flex-direction: row-reverse'};
`;

Row.propTypes = {
    reverse: PropTypes.bool,
    noWrap: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch', 'baseline']),
    justify: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'stretch', 'space-around', 'space-between']),
    margin: PropTypes.string
};

Row.displayName = 'Row';

export default Row;
