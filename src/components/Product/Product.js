import React from 'react';
import './Product.css';

export default (props) => (
    <article className="Product">
        <img src={'//placeimg.com/346/150/animals'} alt={props.product.name} />
        <h3> {props.product.name} </h3>
    </article>
);