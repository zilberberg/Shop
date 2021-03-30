import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props) {
    const productList = useSelector(state => state.productList);
    const {products, loading, error } = productList;
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchVal, setSearchVal] = useState();

    const utils = useSelector(state => state.utils);
    const {category} = utils;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());        
        return () => {
            //
        };
    }, [])

    const searchProducts = (val) => {
        setSearchVal(val);
        const currentProducts = products.filter((product) => {
            return product.name.toString().toLowerCase().includes(val.toLowerCase()) 
        });
        setSelectedProducts(currentProducts);
    }

    return (
        loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        <>
        <header className="searchHeader">
            <input className="searchBox" type="text" placeholder="Search a Product" onChange={(e) => searchProducts(e.target.value)}>
            </input>
        </header>
        <ul className="products">
            
            {
            (searchVal ? selectedProducts : products).map((product, index) => {
                if (category && product.category !== category) {
                    return
                } else {
                    return (
                        <li key={index}>
                            <div className="product">
                                <Link to={'/product/' + product._id}>
                                    <img className="product-image" src={product.image} alt="product"/>
                                </Link>
                                <div className="product-name">
                                    <Link to={'/product/' + product._id}>
                                        {product.name}
                                    </Link>
    
                                </div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-rating">{product.ratings} Stars({product.numReviews} Reviews)</div>
                            </div>
                        </li>
                        )
                }
            })
            }
        </ul>
        </>
    )
}
export default HomeScreen;