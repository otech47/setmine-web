import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button'

import { donationAmountSelected } from '../reducers/donations'

class DonationAmountSelection extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleSelection');
    }

    handleSelection(amount) {
        console.log('Amount selected: ' + amount);
        this.props.donationAmountSelected(amount);
    }

    render() {
        return (
            <div className='DonationAmountSelection'>
                <Button onClick={this.handleSelection.bind(null, 500)}>$5</Button>
                <Button onClick={this.handleSelection.bind(null, 1000)}>$10</Button>
                <Button onClick={this.handleSelection.bind(null, 2000)}>$20</Button>
                <Button onClick={this.handleSelection.bind(null, 5000)}>$50</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        donationAmount: state.donationAmount,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        donationAmountSelected: (amount) => dispatch(donationAmountSelected(amount)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationAmountSelection)
