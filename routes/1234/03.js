const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/p3', (req, res) => {
  res.json([
    { "user_id": "user1", "name": "Alice", "age": 25 },
    { "user_id": "user2", "name": "Bob", "age": 30 },
    { "user_id": "user3", "name": "Charlie", "age": 28 },
    { "user_id": "user4", "name": "David", "age": 35 },
    { "user_id": "user5", "name": "Emily", "age": 22 },
    { "user_id": "user6", "name": "Frank", "age": 40 },
    { "user_id": "user7", "name": "Grace", "age": 27 },
    { "user_id": "user8", "name": "Henry", "age": 32 },
    { "user_id": "user9", "name": "Isabella", "age": 29 },
    { "user_id": "user10", "name": "Jack", "age": 38 }
  ]);
});
