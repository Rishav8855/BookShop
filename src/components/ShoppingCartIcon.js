// ShoppingCartIcon.js
import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartIcon = () => {
  return (
    <Link to="/cart" className="Header-cart">
      🛒
    </Link>
  );
};

export default ShoppingCartIcon;