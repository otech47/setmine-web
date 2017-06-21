import * as types from '../constants/actionTypes'

const initialState = {
    currentPage: 'Setmine',
    isMobile: false,
    loading: false,
    playerVisible: false,
    notification: '',
    showModal: false,
    showNotification: false
}

export default function environment(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case types.CHANGE_IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile
            }
        case types.SHOW_LOADER:
            return {
                ...state,
                loading: action.loading
            }
        
        case types.TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            }
        case types.TOGGLE_PLAYER:
            return {
                ...state,
                playerVisible: !state.playerVisible
            }
        default:
            return state
    }
}