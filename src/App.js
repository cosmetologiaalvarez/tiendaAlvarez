import './App.css';
import Router from './components/Router.js';
import CartContext from './context/CartContext';
import React from 'react';

function App() {
  return (
    <CartContext >
      <Router />
    </CartContext >
  );
}

export default App;
