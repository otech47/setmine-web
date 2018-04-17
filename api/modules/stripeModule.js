// So many utility functions (https://lodash.com/docs)
var _ = require('lodash');

var stripe =  require('../handlers/stripe')

var stripeModule = module.exports = (function() {
    return {
        submitStripeCharge: function(params) {
            console.log('Module function called with :' + params);

            return new Promise(function(resolve, reject) {
                stripe.chargeCustomer(params)
                .then( (response) => {
                    resolve(response);
                }).catch( (error) => {
                    reject(error);
                })
            });
        }
    };
})();