import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { listProducts } from './actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchVal } from './actions/utilsActions';
import SigninScreen from './screens/SigninScreen';
import UserScreen from './screens/UserScreen';
import CategoriesBar from './screens/CategoriesBar';

function App(props) {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(listProducts());
      return () => {
          //
      };
  }, [])

  const searchProducts = (val) => {
    dispatch(setSearchVal(val));
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <Link to="/" >ECommerce Shop</Link>
            </div>
            <input className="searchBox" type="text" placeholder="Search a Product" onChange={(e) => searchProducts(e.target.value)}>
            </input>
            <div className="header-links">
                <Link to="/cart" >Cart</Link>
                {
                  userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                  <Link to="/signin">Sign in</Link>
                }
            </div>
          </header>

          <Route path="/" exact={true} component={CategoriesBar}/>          

          <main className="main">
              <div className="content">
                <Route path="/profile" component={UserScreen}/>
                <Route path="/signin" component={SigninScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/cart" component={CartScreen}/>

              </div>              
          </main>

          <footer className="footer">
                All rights reserved.
          </footer>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
