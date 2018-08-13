import React from 'react';
import './Cart.css'
import CartItems from '../CartItems/CartItems';

export default (props) => (
    <section className="Cart">
        <h2> 🛒 </h2>
        <CartItems cart={props.cart} />
    </section>
);