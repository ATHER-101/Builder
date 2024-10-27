const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/user1', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30
    }
  ]);
});

router.get('/user2', (req, res) => {
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
