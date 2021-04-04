import { CATEGORIES_SET, CATEGORY_SET, RESET_CATEGORY, SET_SEARCH_VAL } from "../constants/utilsConstants";

function utilsReducer(state = {categories: [], category: null, searchVal: null}, action) {
    switch (action.type) {
        case CATEGORIES_SET:
            return {...state, categories: action.payload};
        case CATEGORY_SET:
            return {...state, category: action.payload, categories: state.categories};
        case RESET_CATEGORY:
            return {...state, category: null, categories: state.categories};
        case SET_SEARCH_VAL:
            return {...state, searchVal: action.payload}
        default:
            return state;
    }
}

export { utilsReducer }