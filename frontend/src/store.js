import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import Cookie from 'js-cookie';
import { utilsReducer } from './reducers/utilsReducer';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: {cartItems}, userSignin: {userInfo} };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    utils: utilsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;