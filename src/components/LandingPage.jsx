import React from 'react';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';
import StripeCheckout from './StripeCheckout'
import CoinPaymentsCheckout from './CoinPaymentsCheckout'
import DonationAmountSelection from './DonationAmountSelection'

import setlife from '../scripts/setlife'

export default class LandingPage extends Base {
    handleStartCoding() {
        setlife.clearLandingPage();
    }
    render() {
        return (
            <div className='LandingPage'>
                <p>Please give us money</p>

                <DonationAmountSelection />
                
                <CoinPaymentsCheckout />
                
                <StripeCheckout />
            </div>
        );
    }
}