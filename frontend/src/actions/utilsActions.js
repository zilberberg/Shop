import {CATEGORIES_SET, CATEGORY_SET} from '../constants/utilsConstants';

const addCategories = (categories) => async (dispatch) => {
    try {
        dispatch({type: CATEGORIES_SET, payload: categories});
    } catch (error) {
        dispatch({type: CATEGORIES_SET, payload: error.message});
    }
}

const selectCategory = (category) => (dispatch,) => {
    try {
        dispatch({type: CATEGORY_SET, payload: category});
    } catch (error) {
        dispatch({type: CATEGORY_SET, payload: error.message});
    }
}

export { addCategories, selectCategory }