// ShoppingCart.js
import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
      <p className="ShoppingCart-total">
        Total: ${calculateTotal(cartItems).toFixed(2)}
      </p>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default ShoppingCart;