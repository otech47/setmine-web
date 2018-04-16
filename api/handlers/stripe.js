const { STRIPE } = require('../config/credentials');
const { DEFAULT_CURRENCY } = require('../config/constants');

var _ = require('underscore');
var moment = require('moment');
var Stripe = require('stripe')(STRIPE.KEY);

var stripe = module.exports = {
    chargeCustomer: (params) => {
        return new Promise((resolve, reject) => {
            console.log('chargeCustomer')
            console.log(params);
            Stripe.charges.create({
                amount: params.amount,
                currency: DEFAULT_CURRENCY,
                receipt_email: params.customerEmail,
                source: params.stripeToken,
                description: 'Charge for ' + params.customerEmail + ': ' + params.chargeDescription
            }, (err, charge) => {
                if (err) reject(err);
                else resolve(charge);
            });
        });
    }
}