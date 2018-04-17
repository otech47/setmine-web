import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';

import { CardElement, injectStripe } from 'react-stripe-elements';

import { submitStripeDonation } from '../reducers/donations';

class StripeForm extends Base {
    handleSubmit = (ev) => {
        ev.preventDefault();

        this.props.stripe.createToken().then((result) => {
            if (result.error) {
                console.log('Error message: ' + result.error.message);
            } else {
                console.log('Received Stripe token:', result.token);
                console.log('Calling submitStripeDonation(' + this.props.email + ', ' + result.token.id + ', ' + this.props.donationAmount +')');
                
                submitStripeDonation(this.props.email, result.token.id, this.props.donationAmount);
            }
        });
    }

    render() {
        return (
            <form id='stripeForm' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                    <label> Card Details
                        <CardElement className='card-element'/>
                    </label>
                </div>
                <button>Confirm order</button>
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