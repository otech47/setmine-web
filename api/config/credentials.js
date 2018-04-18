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
        KEY: NODE_ENV == 'production' ? STRIPE_KEY : STRIPE_TEST_KEY,
        SECRET: NODE_ENV == 'production' ? STRIPE_SECRET : STRIPE_TEST_SECRET
    }
};
