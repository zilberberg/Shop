import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { listProducts } from './actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories, selectCategory } from './actions/utilsActions';

function App(props) {
  const productList = useSelector(state => state.productList);
  const {products, loading, error } = productList;

  const utils = useSelector(state => state.utils);
  const {categories} = utils;

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(listProducts());
      
      return () => {
          //
      };
  }, [])

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");    

    if (categories.length == 0 && products) {
        const allCategories = products.map((product) => {return product.category});
        const newCategories = Array.from(new Set(allCategories));
        dispatch(addCategories(newCategories));
    }
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  const selectNewCategory = (category) => {
    dispatch(selectCategory(category));
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                  &#9776;
              </button>
              <Link to="/" >Shop</Link>
            </div>
            <div className="header-links">
                <Link to="/cart" >Cart</Link>
            </div>
          </header>

          <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                  {
                    categories && categories.map((category, index) => {
                      return (
                        <li key={index}>
                          <div onClick={() => selectNewCategory(category)}>
                            {category}
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
          </aside>

          <main className="main">
              <div className="content">
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
