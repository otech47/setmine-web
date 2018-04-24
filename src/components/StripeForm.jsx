import React from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';

import Base from './Base';
import Button from './Button';

import { submitStripeDonation } from '../reducers/donations';

class StripeForm extends Base {
    constructor(props) {
        super(props);
        this.state = {
            donationSubmitted: false,
        }

        this.autoBind('handleSubmit', 'handleDonateAgain');
    }

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
                this.setState({ donationSubmitted: true });

                this.props.submitStripeDonation(email, result.token.id, donationAmount);
            }
        });
    }

    handleDonateAgain(ev) {
        this.setState({ donationSubmitted: false });
    }

    render() {
        return (
            <form className='StripeForm' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                    <CardElement className='card-element'/>
                </div>
                {this.state.donationSubmitted ?
                    <Button className='donateAgain' onClick={this.handleDonateAgain}>Donation Sent! Donate again?</Button>
                    :
                    <Button onClick={this.handleSubmit}>Confirm Donation</Button>
                }
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