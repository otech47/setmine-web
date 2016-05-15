import React, {Component, PropTypes} from 'react';
import Spinner from './Spinner';

const {bool, any} = PropTypes;

export default class Loader extends Component {
    static propTypes = {
        loaded: bool.isRequired,
        children: any.isRequired
    }
    constructor(props, context) {
        super(props, context);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.loaded) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        const {loaded, children} = this.props;
        if(!loaded) {
            return (
                <div id='Loader'>
                    <Spinner />
                </div>
            );
        } else {
            return (
                <div className='loaded-content'>
                    {children}
                </div>
            );
        }
    }
}