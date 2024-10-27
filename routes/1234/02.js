const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/user', (req, res) => {
  res.json([
    { "user_id": "user1", "name": "John Doe", "age": 30 },
    { "user_id": "user2", "name": "Jane Doe", "age": 25 },
    { "user_id": "user3", "name": "Peter Pan", "age": 20 },
    { "user_id": "user4", "name": "Alice Wonderland", "age": 28 },
    { "user_id": "user5", "name": "Bob Smith", "age": 35 }
  ]);
});
