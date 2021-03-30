import { CATEGORIES_SET, CATEGORY_SET, RESET_CATEGORY } from "../constants/utilsConstants";

function utilsReducer(state = {categories: [], category: null}, action) {
    switch (action.type) {
        case CATEGORIES_SET:
            return {categories: action.payload, category: state.category};
        case CATEGORY_SET:
            return {category: action.payload, categories: state.categories};
        case RESET_CATEGORY:
            return {category: null, categories: state.categories};
        default:
            return state;
    }
}

export { utilsReducer }