import React from 'react';
import './ProductList.css';
import Product from '../Product/Product';

export default (props) => (
    <section className="ProductList">
        <h2>Product List</h2>
        <hr />
        <div className="ProductList-Products">
            {
                props.products.map(p => <Product product={p} />)
                
            }
        </div>
    </section>
);
