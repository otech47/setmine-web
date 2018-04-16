import React from 'react';
import STRIPE from '../../api/config/credentials';

import Base from './Base';
import StripeForm from './StripeForm'

import { StripeProvider, Elements } from 'react-stripe-elements';

export default class StripeCheckout extends Base {
    render() {
        return (
            <div className='StripeCheckout'>
                <StripeProvider apiKey='pk_test_Ng3t8WNIUCAcPbxdbMyWHf00'>
                    <Elements>
                        <StripeForm />
                    </Elements>
                </StripeProvider>
            </div>
        );
    }
}

