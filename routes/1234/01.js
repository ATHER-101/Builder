const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

router.get('/user', (req, res) => {
  res.json([
    { user_id: 'user1', name: 'John Doe', age: 30 },
    { user_id: 'user2', name: 'Jane Doe', age: 25 },
    { user_id: 'user3', name: 'Peter Pan', age: 20 },
    { user_id: 'user4', name: 'Alice Wonderland', age: 28 },
    { user_id: 'user5', name: 'Bob Builder', age: 35 }
  ]);
});

router.get('/products', (req, res) => {
  res.json([
    { "product_id": "1", "name": "Product A", "age": 10 },
    { "product_id": "2", "name": "Product B", "age": 20 },
    { "product_id": "3", "name": "Product C", "age": 30 },
    { "product_id": "4", "name": "Product D", "age": 40 },
    { "product_id": "5", "name": "Product E", "age": 50 }
  ]);
});

router.get('/products', (req, res) => {
  res.json([
    { "product_id": "p1", "name": "Product 1", "age": 10 },
    { "product_id": "p2", "name": "Product 2", "age": 20 },
    { "product_id": "p3", "name": "Product 3", "age": 30 },
    { "product_id": "p4", "name": "Product 4", "age": 40 },
    { "product_id": "p5", "name": "Product 5", "age": 50 }
  ]);
});
