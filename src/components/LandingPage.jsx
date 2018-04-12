import React from 'react';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';

import setlife from '../scripts/setlife'

export default class LandingPage extends Base {
    handleStartCoding() {
        setlife.clearLandingPage();
    }
    render() {
        return (
            <div className='LandingPage'>
                <p>This is the LandingPage component</p>
                
                
                
            </div>
        );
    }
}