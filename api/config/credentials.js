const {
    NODE_ENV,
    STRIPE_KEY,
    STRIPE_TEST_KEY,
    STRIPE_SECRET,
    STRIPE_TEST_SECRET,
} = process.env

module.exports = {
    // API Access Keys

    STRIPE: {
        KEY: process.env.NODE_ENV == 'production' ? process.env.STRIPE_KEY : process.env.STRIPE_TEST_KEY,
        SECRET: process.env.NODE_ENV == 'production' ? process.env.STRIPE_SECRET : process.env.STRIPE_TEST_SECRET
    }
};
