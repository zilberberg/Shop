import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, resetCategory } from '../actions/utilsActions';

function CategoriesBar(props) {
    const utils = useSelector(state => state.utils);
    const {categories} = utils;

    const dispatch = useDispatch();

    const selectNewCategory = (category) => {
        dispatch(selectCategory(category));
    }

    const resetCategoryHandler = () => {
        dispatch(resetCategory());
    }

    return <div className="categories">
        <div className="categories-list">
        {
            categories && categories.map((category, index) => {
            return (
                <div key={index} onClick={() => selectNewCategory(category)}>
                {category}
                </div>
            )
            })
        }
        </div>            
        <button className="button secondary" onClick={resetCategoryHandler}>Reset Category</button>
    </div>
}
export default CategoriesBar;