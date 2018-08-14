import React from 'react';
import './CartItem.css';

export default (props) => (
    <div className="CartItem">
        <p>Qty: 
            <button onClick={() => props.handleRemoveItem(props.item.product)}> - </button>
            <span>{props.item.quantity} </span>&nbsp;{props.item.product.name} 
        </p>
    </div>
);