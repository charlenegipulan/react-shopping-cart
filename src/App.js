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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Charlene, Inc.</h1>
        </header>
        <main>
          <ProductList products={products}/>
          <Cart cart={this.state.cart} />
        </main>
      </div>
    );
  }
}

export default App;
