import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="shoes" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>$: {price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <div onClick={() => handleAddToCart(product)} className="cart-btn">
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    );
};

export default Product;