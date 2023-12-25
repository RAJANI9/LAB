import React, { useState } from 'react';

const servicePorts = {
  biryani: 3001,
  pizza: 3002,
  snacks: 3003,
  cakes: 3004,
  payment: 3005  // Assuming there's a payment service
};

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch menu from the services
  const fetchMenu = async (service) => {
    try {
      const response = await fetch(`http://13.127.193.217:${servicePorts[service]}/${service}`);
      if (response.ok) {
        const data = await response.json();
        setMenu(data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  // Search for products
  const searchProducts = async () => {
    try {
      // This assumes you have a search service running that can handle queries
      const response = await fetch(`http://13.127.193.217:${servicePorts['search']}/search?query=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setMenu(data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There has been a problem with your search operation:', error);
    }
  };

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Initiate payment process
  const initiatePayment = async () => {
    try {
      // This assumes you have a payment service that can handle POST requests
      const response = await fetch(`http://13.127.193.217:${servicePorts['payment']}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart })
      });
      if (response.ok) {
        const paymentInfo = await response.json();
        // Redirect to payment gateway or handle payment info
      } else {
        throw new Error('Payment initiation failed.');
      }
    } catch (error) {
      console.error('There has been a problem with your payment operation:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Rajinikanth DevOps Kitchen</h1>
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchProducts}>Search</button>
      <div>
        <button onClick={() => fetchMenu('biryani')}>Biryani</button>
        <button onClick={() => fetchMenu('pizza')}>Pizza</button>
        <button onClick={() => fetchMenu('snacks')}>Snacks</button>
        <button onClick={() => fetchMenu('cakes')}>Cakes</button>
        {/* List items */}
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
        {/* Cart */}
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
        <button onClick={initiatePayment}>Checkout</button>
      </div>
    </div>
  );
}

export default App;
