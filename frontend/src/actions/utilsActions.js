import {CATEGORIES_SET, CATEGORY_SET, RESET_CATEGORY, SET_SEARCH_VAL} from '../constants/utilsConstants';

const addCategories = (categories) => (dispatch) => {
    try {
        dispatch({type: CATEGORIES_SET, payload: categories});
    } catch (error) {
        dispatch({type: CATEGORIES_SET, payload: error.message});
    }
}

const selectCategory = (category) => (dispatch) => {
    try {
        dispatch({type: CATEGORY_SET, payload: category});
    } catch (error) {
        dispatch({type: CATEGORY_SET, payload: error.message});
    }
}

const resetCategory = () => (dispatch) => {
    try {
        dispatch({type: RESET_CATEGORY, payload: []});
    } catch (error) {
        dispatch({type: RESET_CATEGORY, payload: error.message});
    }
}

const setSearchVal = (val) => (dispatch) => {
    try {
        dispatch({type: SET_SEARCH_VAL, payload: val});
    } catch (error) {
        dispatch({type: SET_SEARCH_VAL, payload: error.message});
    }
}

export { addCategories, selectCategory, resetCategory, setSearchVal }