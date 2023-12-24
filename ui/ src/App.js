import React, { useState } from 'react';

const servicePorts = {
  biryani: 3001, // Update with actual host port
  pizza: 3002,   // Update with actual host port
  snacks: 3003,  // Update with actual host port
  cakes: 3004    // Update with actual host port
};

function App() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async (service) => {
    const port = servicePorts[service];
    const response = await fetch(`http://13.127.193.217:${servicePorts[service]}/${service}`);
    const data = await response.json();
    setMenu(data);
  };

  return (
    <div>
      <h1>Welcome to Rajinikanth Kitchen</h1>
      <button onClick={() => fetchMenu('biryani')}>Biryani</button>
      {/* Repeat buttons for Pizza, Snacks, Cakes */}
      <ul>
        {menu.map((item, index) => <li key={index}>{item.name} - {item.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
