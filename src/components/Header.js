// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import ShoppingCartIcon from './ShoppingCartIcon';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logo">
        <Link to="/">Bookstore</Link>
      </div>
      <nav className="Header-nav">
        <Link to="/" className="Header-nav-item">
          Home
        </Link>
        <Link to="/about" className="Header-nav-item">
          About
        </Link>
        <Link to="/contact" className="Header-nav-item">
          Contact
        </Link>
      </nav>
      <div className="Header-icons">
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default Header;
