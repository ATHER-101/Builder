const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/user10', (req, res) => {
  res.json([
    { "user_id": "user1", "name": "John Doe", "age": 30 },
    { "user_id": "user2", "name": "Jane Doe", "age": 25 },
    { "user_id": "user3", "name": "Peter Pan", "age": 28 },
    { "user_id": "user4", "name": "Alice Wonderland", "age": 32 },
    { "user_id": "user5", "name": "Bob Smith", "age": 27 },
    { "user_id": "user6", "name": "Mary Jones", "age": 31 },
    { "user_id": "user7", "name": "David Brown", "age": 29 },
    { "user_id": "user8", "name": "Susan Green", "age": 26 },
    { "user_id": "user9", "name": "William White", "age": 33 },
    { "user_id": "user10", "name": "Emily Black", "age": 24 }
  ]);
});
