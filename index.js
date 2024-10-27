const express = require('express');
const app = express();
const port = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const routes_1234_test1 = require('./routes/1234/test1');
app.use('/1234/test1', routes_1234_test1);


const routes_1234_test2 = require('./routes/1234/test2');
app.use('/1234/test2', routes_1234_test2);


const routes_2345_test1 = require('./routes/2345/test1');
app.use('/2345/test1', routes_2345_test1);

