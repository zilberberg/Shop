import { PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL } from "../constants/productConstants";
import { CATEGORIES_SET } from '../constants/utilsConstants';
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");

        const allCategories = data.map((product) => {return product.category});
        const newCategories = Array.from(new Set(allCategories));
        dispatch({ type: CATEGORIES_SET, payload: newCategories});

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message});
    }    
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
    }
}

export { listProducts, detailsProduct }