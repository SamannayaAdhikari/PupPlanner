import React, { useState } from 'react';
import './YourChoices.css';
import ChoiceCard from '../components/ChoiceCard';
import product1 from '../pages/pet2.jpg';
import product2 from '../pages/pet1.jpg';

const initialProducts = [
  {
    id: 1,
    name: 'Tommy',
    description: '7 months old male pretty intelligent dog.',
    price: 4500,
    image: product1,
  },
  {
    id: 2,
    name: product2,
    description: 'Description of Product 2',
    price: 29.99,
    image: 'product2.jpg',
  },
  // Add more products here
];

function YourChoices() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleBuyClick = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="your-choices-container">
      <h2>Your Choices</h2>
      <div className="product-list">
        {products.map((product) => (
          <ChoiceCard
            key={product.id}
            product={product}
            onBuyClick={handleBuyClick}
          />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Rs{item.price}
            </li>
          ))}
        </ul>
        <p>
          Total: Rs
          {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default YourChoices;
