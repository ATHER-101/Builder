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

router.get('/user10', (req, res) => {
  res.json([
    { "user_id": "user1", "name": "John Doe", "age": 30 },
    { "user_id": "user2", "name": "Jane Doe", "age": 25 },
    { "user_id": "user3", "name": "Peter Pan", "age": 28 },
    { "user_id": "user4", "name": "Alice Wonderland", "age": 22 },
    { "user_id": "user5", "name": "Bob Builder", "age": 35 },
    { "user_id": "user6", "name": "Mary Poppins", "age": 40 },
    { "user_id": "user7", "name": "Tom Cruise", "age": 58 },
    { "user_id": "user8", "name": "Angelina Jolie", "age": 45 },
    { "user_id": "user9", "name": "Brad Pitt", "age": 56 },
    { "user_id": "user10", "name": "Jennifer Aniston", "age": 51 }
  ]);
});
