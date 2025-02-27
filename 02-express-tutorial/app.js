const express = require('express');
const app = express();
const { products, people } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  products.map((product) => {
    res.send(`<h1>${product.name}</h1><p>${product.desc}</p>`);
  });
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  console.log(req.params);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product Does not exist');
  }

  res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello');
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] });
  }
  return res.status(200).json(sortedProducts);

  // res.send(`page ${req.query.page}`);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
