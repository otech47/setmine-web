const { STRIPE } = require('../config/credentials');

var moment = require('moment');
var Stripe = require('stripe')(STRIPE.SECRET);

var stripe = module.exports = {
    chargeCustomer: (params) => {
        return new Promise((resolve, reject) => {
            Stripe.charges.create({
                amount: params.amount,
                currency: 'usd',
                receipt_email: params.customerEmail,
                source: params.stripeToken,
                description: 'Charge for ' + params.customerEmail + ': ' + params.chargeDescription
            }, (err, charge) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(charge); 
                }
            });
        });
    }
}