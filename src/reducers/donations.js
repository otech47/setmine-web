import api from '../scripts/api';

// Reducer
const initialState = {
    email: '',
    donationAmount: 1000,
    donationStatus: 'notSubmitted',
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
    case DONATION_STATUS:
        return {
            ...state,
            donationStatus: action.donationStatus,
        };
    default:
        return state;
    }
}

export function donationAmountSelected(donationAmount) {    
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

export function changeDonationStatus(donationStatus) {
    return {
        type: DONATION_STATUS,
        donationStatus: donationStatus
    };
}

export function submitStripeDonation(email, token, amount) {
    return (dispatch) => {
        api.graph({
            query: `mutation{
                submitStripeCharge(
                    customerEmail: "${email}",
                    stripeToken: "${token}",
                    amount: "${amount}",
                )
            }`
        })
        .then(data => {
            dispatch(changeDonationStatus('complete'))
        })
        .catch(err => {
            dispatch(changeDonationStatus('failed'))
        })
    }
}

// Index of Action Types
const DONATION_AMOUNT = 'DONATION_AMOUNT';
const EMAIL = 'EMAIL';
const DONATION_STATUS = 'DONATION_STATUS';