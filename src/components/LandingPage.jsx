import React from 'react';

import Base from './Base';
import Button from './Button';
import Icon from './Icon';

import setlife from '../scripts/setlife'

export default class LandingPage extends Base {
    handleStartCoding() {
        setlife.clearLandingPage();
    }
    render() {
        return (
            <div className='LandingPage'>
                <p>Please give us money</p>
                
                <form action="https://www.coinpayments.net/index.php" method="post">
                    <input type="hidden" name="cmd" value="_donate"/>
                    <input type="hidden" name="reset" value="1"/>
                    <input type="hidden" name="merchant" value="6fb2cdcc838888540ff0d5a702375316"/>
                    <input type="hidden" name="currency" value="USD"/>
                    <input type="hidden" name="amountf" value="20.00"/>
                    <input type="hidden" name="item_name" value="Test Donation"/>		
                    <input type="image" src="https://www.coinpayments.net/images/pub/donate-grey.png" alt="Donate with CoinPayments.net"/>
                </form>
                
            </div>
        );
    }
}