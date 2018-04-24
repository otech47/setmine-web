import api from '../scripts/api';

// Reducer
const initialState = {
    email: '',
    donationAmount: 1000
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case EMAIL:
        return {
            ...state,
            email: action.email,
        };
    case DONATION_AMOUNT:
        return {
            ...state,
            donationAmount: action.donationAmount,
        };
    default:
        return state;
    }
}

export function donationAmountSelected(donationAmount) {
    console.log('Amount selected: ' + donationAmount);
    
    return {
        type: DONATION_AMOUNT,
        donationAmount: donationAmount
    };
}

export function emailEntered(email) {
    return {
        type: EMAIL,
        email: email
    };
}

export function submitStripeDonation(email, token, amount) {
    console.log('Sending graph mutation with params (' + email + ', ' + token + ', ' + amount +')');

    api.graph({
        query: `mutation{
            submitStripeCharge(
                email: "${email}",
                stripeToken: "${token}",
                amount: "${amount}",
            )
        }`
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })
}

// Index of Action Types
const DONATION_AMOUNT = 'DONATION_AMOUNT';
const EMAIL = 'EMAIL';