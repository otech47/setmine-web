import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import STRIPE from '../../api/config/credentials';

import Base from './Base';
import StripeForm from './StripeForm'

export default class StripeCheckout extends Base {
    render() {
        return (
            <div className='StripeCheckout'>
                <StripeProvider apiKey={STRIPE.KEY}>
                    <Elements>
                        <StripeForm />
                    </Elements>
                </StripeProvider>
            </div>
        );
    }
}

