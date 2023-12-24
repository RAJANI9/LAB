import React, { useState } from 'react';

function App() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async (service) => {
    const response = await fetch(`http://13.127.193.217:PORT/${service}`);
    const data = await response.json();
    setMenu(data);
  };

  return (
    <div>
      <h1>Welcome to Rajinikanth Kitchen</h1>
      <button onClick={() => fetchMenu('biryani')}>Biryani</button>
      {/* Repeat for Pizza, Snacks, Cakes */}
      <ul>
        {menu.map((item, index) => <li key={index}>{item.name} - {item.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
