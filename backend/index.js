const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Headphones", price: 2500 },
  { id: 3, name: "Smartwatch", price: 3999 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
