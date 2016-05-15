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
            return Object.assign({}, state, {
                currentPage: action.page
            });

        case types.CHANGE_IS_MOBILE:
            return Object.assign({}, state, {
                isMobile: action.isMobile
            });

        case types.TOGGLE_NAVBAR:
            return Object.assign({}, state, {
                showNavbar: action.showNavbar
            });

        case types.TOGGLE_LOADER:
            return Object.assign({}, state, {
                loaded: action.loaded
            });
            
        default:
            return state;
    }
}