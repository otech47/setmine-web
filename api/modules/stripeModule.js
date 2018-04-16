// So many utility functions (https://lodash.com/docs)
var _ = require('lodash');

var sampleModule = module.exports = (function() {
    return {
        submitStripeCharge: function(params) {
            // This is okay, but avoid writing long functions within the module's return object

            return new Promise(function(resolve, reject) {
                
                resolve(params);
            });
        }
    };
})();