const express = require('express');

const app = express();

app.use("/api/products", (req, res, next) => {
  const products = [
    {
      id: '1',
      name: "First server-side product",
      categroy: "This is coming from the server",
      price: "51"
    },
    {
      id: '2',
      name: "Second server-side product",
      categroy: "This is coming from the server",
      price: "455"
    }
  ];
  res.status(200).json({
    message: 'Products fetched successfully!',
    products: products
  });
});

module.exports = app;
