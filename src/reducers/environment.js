import * as types from '../constants/actionTypes';

const initialState = {
    currentPage: 'Setmine Redux',
    isMobile: false,
    showNavbar: true,
    loaded: false
};

export default function environment(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_CURRENT_PAGE:
            console.log(action);
            return Object.assign({}, state, {
                currentPage: action.page
            });
        default:
            return state;
    }
}