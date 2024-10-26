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
