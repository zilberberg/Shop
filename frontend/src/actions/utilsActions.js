import {CATEGORIES_SET, CATEGORY_SET, RESET_CATEGORY} from '../constants/utilsConstants';

const addCategories = (categories) => async (dispatch) => {
    try {
        dispatch({type: CATEGORIES_SET, payload: categories});
    } catch (error) {
        dispatch({type: CATEGORIES_SET, payload: error.message});
    }
}

const selectCategory = (category) => async (dispatch) => {
    try {
        dispatch({type: CATEGORY_SET, payload: category});
    } catch (error) {
        dispatch({type: CATEGORY_SET, payload: error.message});
    }
}

const resetCategory = () => async (dispatch) => {
    try {
        dispatch({type: RESET_CATEGORY, payload: []});
    } catch (error) {
        dispatch({type: RESET_CATEGORY, payload: error.message});
    }
}

export { addCategories, selectCategory, resetCategory }