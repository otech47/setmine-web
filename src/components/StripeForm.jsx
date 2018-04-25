import React from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';

import Base from './Base';
import Button from './Button';

import { submitStripeDonation, changeDonationStatus, emailEntered } from '../reducers/donations';

class StripeForm extends Base {
    constructor(props) {
        super(props);

        this.autoBind('handleSubmit', 'handleDonateAgain', 'buttonToDisplay', 'handleInput');
    }

    handleSubmit(ev) {
        const {
            stripe,
            email,
            donationAmount,
        } = this.props

        ev.preventDefault();

        stripe.createToken().then((result) => {
            if (result.error) {
                this.props.changeDonationStatus('failed');
            } else {
                this.props.changeDonationStatus('submitted');

                this.props.submitStripeDonation(email, result.token.id, donationAmount);
            }
        });
    }

    handleDonateAgain(ev) {
        this.props.changeDonationStatus('notSubmitted');
    }

    buttonToDisplay(donationStatus) {
        switch (donationStatus) {
        case 'notSubmitted': return <Button onClick={this.handleSubmit}>Confirm Donation</Button>;
        case 'submitted': return <p className='Button donateAgain' onClick={this.handleDonateAgain}>Donation Processing!</p>;
        case 'complete': return <Button className='donateAgain' onClick={this.handleDonateAgain}>Donation Complete! Donate again?</Button>;
        case 'failed': return <Button className='donateFailed' onClick={this.handleDonateAgain}>Donation Failed! Try again?</Button>;
        }
    }

    handleInput(event) {
        this.props.emailEntered(event.target.value)
    }

    render() {
        const { 
            donationStatus, 
        } = this.props;

        return (
            <form className='StripeForm' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                    <input type='text' value={this.props.email} placeholder='Email' onChange={this.handleInput}/>
                </div>
                <div className='form-row'>
                    <CardElement className='card-element'/>
                </div>
                { this.buttonToDisplay(donationStatus) }
            </form>
            
        );
    }
}

function mapStateToProps (state) {
    return {
        email: state.donations.email,
        donationAmount: state.donations.donationAmount,
        donationStatus: state.donations.donationStatus
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitStripeDonation: (email, token, amount) => dispatch(submitStripeDonation(email, token, amount)),
        changeDonationStatus: (donationStatus) => dispatch(changeDonationStatus(donationStatus)),
        emailEntered: (email) => dispatch(emailEntered(email)),
    };
}

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(StripeForm));