import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Base from './Base';

export default class Icon extends Base {
    render() {
        return (
            <div
                className={'Icon ' + this.props.faIconName}
                onClick={this.props.onClick}
            >
                <FontAwesomeIcon
                    icon={this.props.faIconName}
                    size={this.props.size}
                />
            </div>
            
        );
    }
}

Icon.defaultProps = {
    size: 'lg'
};