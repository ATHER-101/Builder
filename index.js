const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// // Basic route to handle GET requests
// app.get('/', (req, res) => {
//   res.send({name:'Hello World from Express!'});
// });

// // Route with a dynamic parameter
// app.get('/hello/:name', (req, res) => {
//   const name = req.params.name;
//   res.send(`Hello, ${name}!`);
// });

// // Route to handle POST requests
// app.post('/data', (req, res) => {
//   const receivedData = req.body;
//   res.json({
//     message: 'Data received successfully!',
//     data: receivedData,
//   });
// });

// Import the routes from the separate file
const routes = require('./routes/1234/01');

// Use the imported routes
app.use('/1234/01', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
