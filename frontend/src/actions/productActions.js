import { PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_SET_CATEGORY,
    PRODUCT_CATEGORY_FAIL } from "../constants/productConstants"
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
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

const selectCategory = (category) => (dispatch) => {
    try {
        dispatch({type: PRODUCT_SET_CATEGORY, payload: category});
    } catch (error) {
        dispatch({type: PRODUCT_CATEGORY_FAIL, payload: error.message});
    }
}

export { listProducts, detailsProduct, selectCategory }