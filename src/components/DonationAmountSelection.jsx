import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import Button from './Button'

import { donationAmountSelected } from '../reducers/donations'

class DonationAmountSelection extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleSelection', 'handleInput');

        this.state = { customValueSelected: false };
    }

    handleSelection(amount) {
        this.setState({ customValueSelected: false });

        this.props.donationAmountSelected(amount);
    }

    handleInput(event) {
        if (event.target.value) {
            this.setState({ customValueSelected: true });
            this.props.donationAmountSelected(event.target.value * 100)
        }
    }

    render() {
        return (
            <div className='DonationAmountSelection'>
                <Button className={this.props.donationAmount == 500 ? 'selected' : ''} onClick={() => this.handleSelection(500)}>$5</Button>
                <Button className={this.props.donationAmount == 1000 ? 'selected' : ''} onClick={() => this.handleSelection(1000)}>$10</Button>
                <Button className={this.props.donationAmount == 2000 ? 'selected' : ''} onClick={() => this.handleSelection(2000)}>$20</Button>
                <Button className={this.props.donationAmount == 5000 ? 'selected' : ''} onClick={() => this.handleSelection(5000)}>$50</Button>
                <input 
                    type='number' 
                    className={this.state.customValueSelected ? 'Button selected' : 'Button'}
                    value={this.state.customValueSelected ? this.props.donationAmount / 100 : ''}
                    placeholder='Custom amount...' 
                    onChange={this.handleInput} 
                    onFocus={this.handleInput}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        donationAmount: state.donations.donationAmount,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        donationAmountSelected: (amount) => dispatch(donationAmountSelected(amount)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationAmountSelection)
