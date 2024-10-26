const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

router.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

router.post('/data', (req, res) => {
  const receivedData = req.body;
  res.json({
    message: 'Data received successfully via Routes!',
    data: receivedData,
  });
});

module.exports = router;
