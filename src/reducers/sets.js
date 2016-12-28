import * as types from '../constants/actionTypes';

const initialState = {
    page: 1,
    sets: [],
    loaded: false
}

export default function sets(state = initialState, action) {
    switch(action.type) {
        case types.RECEIVE_SETS:
            return {
                ...state,
                page: action.page,
                sets: action.sets,
                loaded: action.loaded
            }
        case types.RESET_SETS:
            return initialState;
        default:
            return state;
    }
}