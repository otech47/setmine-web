import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';

class CoinPaymentsCheckout extends Base {
    render() {
        return (
            <div className='CoinPaymentsCheckout'>
                <form action='https://www.coinpayments.net/index.php' method='post'>
                    <input type='hidden' name='cmd' value='_donate'/>
                    <input type='hidden' name='reset' value='1'/>
                    <input type='hidden' name='merchant' value='6fb2cdcc838888540ff0d5a702375316'/>
                    <input type='hidden' name='currency' value='USD'/>
                    <input type='hidden' name='amountf' value={this.props.donationAmount/100}/>
                    <input type='hidden' name='item_name' value='Donation'/>	
                    <input type='image' src='https://www.coinpayments.net/images/pub/donate-grey.png' alt='Donate with CoinPayments.net'/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        donationAmount: state.donations.donationAmount,
    };
}

export default connect(mapStateToProps)(CoinPaymentsCheckout)