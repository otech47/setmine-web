import React from 'react';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';
import StripeCheckout from './StripeCheckout'
import CoinPaymentsCheckout from './CoinPaymentsCheckout'
import DonationAmountSelection from './DonationAmountSelection'

export default class LandingPage extends Base {
    render() {
        return (
            <div className='LandingPage'>

                <img src='../images/setmine-logo.png' />

                <p>Choose a donation amount:</p>

                <DonationAmountSelection />

                <div className='sections'>
                    <div className='section'>
                        <p> Donate with cryptocurrency via CoinPayments! </p>
                        <CoinPaymentsCheckout />
                    </div>

                    <div className='section'>
                        <p> Donate with credit/debit via Stripe! </p>
                        <StripeCheckout />
                    </div>
                </div>
            </div>
        );
    }
}