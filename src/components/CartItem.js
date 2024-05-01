import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="ShoppingCart-item">
      <img
        src={item.image}
        alt={item.title}
        style={{ maxWidth: '50px', marginRight: '10px' }}
      />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>{item.author}</p>
        <p>${item.price}</p>
        <p>
          Quantity:{' '}
          <select
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
