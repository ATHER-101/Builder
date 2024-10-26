const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/random', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30,
      "random_number": 0.785432
    },
    {
      "user_id": "user456",
      "name": "Jane Smith",
      "age": 25,
      "random_number": 0.123456
    }
  ]);
});

router.get('/random1', (req, res) => {
  res.json([
    {
      "user_id": "user1",
      "name": "John Doe",
      "age": 30,
      "random_number": 0.54321
    },
    {
      "user_id": "user2",
      "name": "Jane Doe",
      "age": 25,
      "random_number": 0.87654
    },
    {
      "user_id": "user3",
      "name": "Peter Pan",
      "age": 10,
      "random_number": 0.12345
    }
  ]);
});

router.get('/atharva', (req, res) => {
  res.json([
    { user_id: 'user1', name: 'John Doe', age: 30 },
    { user_id: 'user2', name: 'Jane Smith', age: 25 },
    { user_id: 'user3', name: 'Peter Jones', age: 40 }
  ]);
});

router.get('/amogh', (req, res) => {
  res.json([
    { "user_id": "f876543210987654", "name": "Alice", "age": 25 },
    { "user_id": "1234567890123456", "name": "Bob", "age": 30 },
    { "user_id": "9876543210123456", "name": "Charlie", "age": 28 },
    { "user_id": "4567890123456789", "name": "David", "age": 22 },
    { "user_id": "0123456789012345", "name": "Eve", "age": 29 },
    { "user_id": "7890123456789012", "name": "Frank", "age": 31 },
    { "user_id": "3456789012345678", "name": "Grace", "age": 27 },
    { "user_id": "2345678901234567", "name": "Henry", "age": 26 },
    { "user_id": "5678901234567890", "name": "Ivy", "age": 24 },
    { "user_id": "6789012345678901", "name": "Jack", "age": 32 }
  ]);
});

router.get('/amogh', (req, res) => {
  res.json([
    { "user_id": "1234567890abcdef", "name": "Alice", "age": 25 },
    { "user_id": "9876543210fedcba", "name": "Bob", "age": 30 },
    { "user_id": "abcdef1234567890", "name": "Charlie", "age": 35 },
    { "user_id": "fedcba9876543210", "name": "David", "age": 40 },
    { "user_id": "1234567890abcdef", "name": "Eve", "age": 28 },
    { "user_id": "9876543210fedcba", "name": "Frank", "age": 32 },
    { "user_id": "abcdef1234567890", "name": "Grace", "age": 37 },
    { "user_id": "fedcba9876543210", "name": "Henry", "age": 42 },
    { "user_id": "1234567890abcdef", "name": "Isabella", "age": 26 },
    { "user_id": "9876543210fedcba", "name": "Jack", "age": 31 }
  ]);
});
