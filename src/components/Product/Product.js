import React from 'react';
import './Product.css';

export default (props) => (
    <article className="Product">
        <img src={'//placeimg.com/350/150/animals'} alt={props.product.name} />
        <div>
            <h3> {props.product.name} </h3>
            <p> {props.product.description} </p>
            <div>
                <span>{props.product.sku}</span>
                <button>ADD TO CART</button>
                <span>{props.product.price}</span>
            </div>
        </div>
    </article>
);