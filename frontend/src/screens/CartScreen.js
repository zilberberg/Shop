import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function CartScreen (props) {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, []);

    return (
        <div>
            CART
        </div>
    )
}
export default CartScreen;