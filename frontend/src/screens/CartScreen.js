import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart, removeFromCart} from '../actions/cartActions';

function CartScreen(props) {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }
    useEffect(() => {

    }, [])

    const checkoutHandler = () => {
        cartItems.map((item) => {
            console.log("Item name: " + item.name + " | Quantity: " + item.qty);
        });
        console.log("Total price: " + cartItems.reduce((a,c) => a + c.price * c.qty, 0));
    }

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
            
            {
                cartItems.length === 0 ?
                <div>
                    Cart is empty
                </div>
                :
                cartItems.map( (item, index) => {
                    return (
                        <li key={index}>
                            <div className="cart-image">
                                <img src={item.image} alt="product"/>
                            </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/" + item.product}>
                                        {item.name}
                                    </Link>                                    
                                </div>
                                <div>
                                    Qty:
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                        {[...Array(item.countInStock).keys()].map(x => 
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )}
                                    </select>
                                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                                </div>
                            </div>
                            <div className="cart-price">
                                ${item.price}
                            </div>
                        </li>
                    )
                })

            }
            </ul>
        </div>
        {
            cartItems.length > 0 &&
            <div className="cart-action">
                <h3>
                    Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items)
                    :
                    $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        }
        
    </div>
}
export default CartScreen;