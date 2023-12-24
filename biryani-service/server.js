const express = require('express');
const app = express();
const port = 3001;

app.get('/biryani', (req, res) => {
  res.json([
    { name: 'Chicken Biryani', price: '10' },
    { name: 'Mutton Biryani', price: '12' }
    // Add more biryani options here
  ]);
});

app.listen(port, () => {
  console.log(`Biryani service running on port ${port}`);
});
