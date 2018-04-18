import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button';

import { CardElement, injectStripe } from 'react-stripe-elements';

import { submitStripeDonation } from '../reducers/donations';

class StripeForm extends Base {
    handleSubmit(ev) {
        const {
            stripe,
            email,
            donationAmount,
            submitStripeDonation
        } = this.props

        ev.preventDefault();

        stripe.createToken().then((result) => {
            if (result.error) {
                console.log('Error message: ' + result.error.message);
            } else {
                submitStripeDonation(email, result.token.id, donationAmount);
            }
        });
    }

    render() {
        return (
            <form id='stripeForm' onSubmit={this.handleSubmit}>
                <div className='form-row'>

                    <p>Card Details</p>
                    <CardElement className='card-element'/>
                </div>
                <Button>Confirm order</Button>
            </form>
            
        );
    }
}

function mapStateToProps (state) {
    return {
        email: state.donations.email,
        donationAmount: state.donations.donationAmount,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitStripeDonation: (email, token, amount) => dispatch(submitStripeDonation(email, token, amount)),
    };
}

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(StripeForm));