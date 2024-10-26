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
