import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import Cookie from 'js-cookie';
import { utilsReducer } from './reducers/utilsReducer';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: {cartItems} };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    utils: utilsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;