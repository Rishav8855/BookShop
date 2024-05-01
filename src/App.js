// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch books data from JSON file
    axios.get('/books.json')
      .then(response => setBooks(response.data.books))
      .catch(error => console.error('Error fetching books data:', error));
  }, []);

  const addToCart = (book) => {
    // Implement your add to cart logic here
    setCartItems((prevCartItems) => [...prevCartItems, { ...book, quantity: 1 }]);
  };

  const removeFromCart = (bookId) => {
    // Implement your remove from cart logic here
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    // Implement your update quantity logic here
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ProductList books={books} addToCart={addToCart} cartItems={cartItems} />
              </>
            }
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
