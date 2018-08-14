import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

import products from './products';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    }
  }

  handleAddItem = (product) => {
    this.setState(prevState => {
      let item = prevState.cart.find(item => item.product === product);
      var newCart;
      if (item) {
        item.quantity++;
        newCart = prevState.cart;
      } else {
        item = {
          product,
          quantity: 1
        };
        newCart = prevState.cart.concat(item);
    };
    return {cart: newCart};
  });
}

handleRemoveItem = (product) => {
  this.setState(prevState => {
    var itemIdx = prevState.cart.findIndex(item => item.product === product);
    var item = prevState.cart[itemIdx];
    if (item.quantity === 1) {
      prevState.cart.splice(itemIdx, 1);
    } else {
      item.quantity--;
    }
    return prevState;
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Charlene, Inc.</h1>
        </header>
        <main>
          <ProductList 
            products={products}
            handleAddItem={this.handleAddItem}
            />
          <Cart 
            cart={this.state.cart} 
            handleRemoveItem={this.handleRemoveItem}
          />
        </main>
      </div>
    );
  }
}

export default App;
