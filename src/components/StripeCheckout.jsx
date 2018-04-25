import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import { STRIPE_KEY } from '../constants/index';

import Base from './Base';
import StripeForm from './StripeForm';

export default class StripeCheckout extends Base {
    render() {
        return (
            <div className='StripeCheckout'>
                <StripeProvider apiKey={STRIPE_KEY}>
                    <Elements>
                        <StripeForm />
                    </Elements>
                </StripeProvider>
            </div>
        );
    }
}

