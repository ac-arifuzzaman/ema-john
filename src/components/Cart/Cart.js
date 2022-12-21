import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Selected order : {cart.length}</p>
        </div>
    );
};

export default Cart;