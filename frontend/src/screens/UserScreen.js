import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import { signout } from '../actions/userActions';

function UserScreen (props) {

    const dispatch = useDispatch();
    const signoutUser = () => {
        dispatch(signout());
    }

    return (
        <div className="user">
            <ul>
                <li>
                    <Link to="/" className="button primary" onClick={signoutUser}>
                        Log out
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default UserScreen;