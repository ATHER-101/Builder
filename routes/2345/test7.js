const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/user1', (req, res) => {
  res.json([
    {
      "user_id": "a1b2c3d4e5f6g7h8",
      "name": "John Doe",
      "age": 30
    }
  ]);
});
