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
