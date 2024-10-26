const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

router.get('/user', (req, res) => {
  res.json([
    {
      "user_id": "user1",
      "name": "John Doe",
      "age": 30
    },
    {
      "user_id": "user2",
      "name": "Jane Doe",
      "age": 25
    }
  ]);
});

router.get('/sid', (req, res) => {
  res.json([
    { user_id: 'user1', name: 'John Doe', age: 30 },
    { user_id: 'user2', name: 'Jane Doe', age: 25 },
    { user_id: 'user3', name: 'Peter Pan', age: 20 }
  ]);
});

router.get('/sid', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30
    },
    {
      "user_id": "user456",
      "name": "Jane Doe",
      "age": 25
    }
  ]);
});

router.get('/atharva', (req, res) => {
  res.json([
    { user_id: 'user1', name: 'Alice', age: 30 },
    { user_id: 'user2', name: 'Bob', age: 25 },
    { user_id: 'user3', name: 'Charlie', age: 35 }
  ]);
});

router.get('/user', (req, res) => {
  res.json([
    { user_id: 'user1', name: 'Alice', age: 30 },
    { user_id: 'user2', name: 'Bob', age: 25 },
    { user_id: 'user3', name: 'Charlie', age: 35 }
  ]);
});
