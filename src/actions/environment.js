import * as types from '../constants/actionTypes';

export function changeCurrentPage(page) {
    return {
        type: types.CHANGE_CURRENT_PAGE,
        page
    };
}