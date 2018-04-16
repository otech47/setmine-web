import api from '../scripts/api';

// Reducer
const initialState = {
    email: '',
    donationAmount: 10
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

export function submitStripeDonation(token) {
    // TODO: Send POST request with donation info to stripe endpoint
}

// Index of Action Types
const DONATION_AMOUNT = 'DONATION_AMOUNT';
const EMAIL = 'EMAIL';