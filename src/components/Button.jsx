import React from 'react';

import Base from './Base';

export default class Button extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Button' onClick={this.props.onClick}>
                <p>{this.props.children}</p>
            </div>
        );
    }
}