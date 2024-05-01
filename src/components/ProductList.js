// ProductList.js
import React, { useState } from 'react';
import '../styles.css';

const ProductList = ({ books, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedToCart((prevAddedToCart) => ({ ...prevAddedToCart, [book.id]: true }));
  };

  return (
    <div className="ProductList">
      {books.map((book) => (
        <div key={book.id} className="Product">
          <img src={`/images/${book.image}`} alt={book.title} className="ProductImage" />
          <div className="ProductInfo">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <div className="ProductRating">
              {renderStarRating(generateRandomRating())}
            </div>
            <button onClick={() => handleAddToCart(book)} disabled={addedToCart[book.id]}>
              {addedToCart[book.id] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const renderStarRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
        ★
      </span>
    );
  }
  return stars;
};

const generateRandomRating = () => {
  // Generates a random rating between 3 and 5 for variety
  return Math.floor(Math.random() * 3) + 3;
};

export default ProductList;
