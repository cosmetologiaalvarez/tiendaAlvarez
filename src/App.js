import './App.css';
import NavBar from './components/NavBar.js';
import Router from './components/Router.js';
import CartContext from './context/CartContext';
import React from 'react';

function App() {
  return (
    <>
      <NavBar/>
      <CartContext >
        <Router />
      </CartContext >
    </>
  );
}

export default App;
