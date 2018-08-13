import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

import products from './products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Marble, Inc.</h1>
        </header>
        <main>
          <ProductList products={products}/>
          <Cart />
        </main>
      </div>
    );
  }
}

export default App;
