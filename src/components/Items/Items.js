import React from 'react';
import './items.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Items = (props) => {
    console.log(props.product);
    const { name, img, seller, price, stock } = props.product;

    return (
        <div className='product'>

            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-name' >
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><small>{price}</small></p>
                <p><small>only {stock} in stock -order soon</small></p>
                <button onClick={() => props.handleButton(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> Add to card </button>
            </div>
        </div>
    );
};

export default Items;