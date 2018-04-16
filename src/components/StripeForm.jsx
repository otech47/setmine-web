import React from 'react';

import Base from './Base';

import { CardElement, injectStripe } from 'react-stripe-elements';

class StripeForm extends Base {
    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();

        this.props.stripe.createToken().then((result) => {
            if (result.error) {
                console.log('Error message: ' + result.error.message);
            } else {
                console.log('Received Stripe token:', result.token);
                
                submitStripeDonation(token);
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

function mapDispatchToProps(dispatch) {
    return {
        submitStripeDonation: (token) => dispatch(submitStripeDonation(token)),
    };
}

export default injectStripe(StripeForm);

