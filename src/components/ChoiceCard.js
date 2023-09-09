import React from 'react';

function ChoiceCard({ product, onBuyClick }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: Rs{product.price}</p>
      <button onClick={() => onBuyClick(product)}>Book</button>
    </div>
  );
}

export default ChoiceCard;
