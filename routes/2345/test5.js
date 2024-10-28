const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/random', (req, res) => {
  res.json([
    {
      "book": "The Hitchhiker's Guide to the Galaxy",
      "animal": "Dog",
      "drink": 3
    },
    {
      "book": "1984",
      "animal": "Cat",
      "drink": 2
    }
  ]);
});
