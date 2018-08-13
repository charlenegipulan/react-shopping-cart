import React from 'react';
import './Cart.css'
import CartItems from '../CartItems/CartItems';

export default (props) => (
    <section className="Cart">
        Cart Items
        <CartItems cart={props.cart} />
    </section>
);