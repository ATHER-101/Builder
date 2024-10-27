const express = require('express');
const router = express.Router();

module.exports = router;


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

router.get('/user10', (req, res) => {
  res.json([
    { "user_id": "user1", "name": "John Doe", "age": 30 },
    { "user_id": "user2", "name": "Jane Doe", "age": 25 },
    { "user_id": "user3", "name": "Peter Pan", "age": 28 },
    { "user_id": "user4", "name": "Alice Wonderland", "age": 22 },
    { "user_id": "user5", "name": "Bob Builder", "age": 35 },
    { "user_id": "user6", "name": "Charlie Brown", "age": 29 },
    { "user_id": "user7", "name": "David Copperfield", "age": 32 },
    { "user_id": "user8", "name": "Emily Dickinson", "age": 27 },
    { "user_id": "user9", "name": "Frankenstein", "age": 31 },
    { "user_id": "user10", "name": "George Washington", "age": 33 }
  ]);
});
