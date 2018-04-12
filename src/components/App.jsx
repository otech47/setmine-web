// 3rd party React components
import React from 'react';

// 3rd party npm modules
import _ from 'lodash'

// app components
import Base from './Base';

export default class App extends Base {
    constructor(props) {
        super(props);
        // Bind custom component functions here that need to access the state
        this.autoBind('customComponentFunction1', 'customComponentFunction1'); 
    }

    customComponentFunction1() {
        // Custom functionality specific to this component
    }
    customComponentFunction2() {
        // Custom functionality specific to this component
    }
   
    render() {
        
        return (
            <div className='App'>
                {this.props.children}
            </div>
        );
    }
}

