const express = require('express');
const app = express();
const port = 4000;

// Middleware for parsing JSON
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const routes_1234_01 = require('./routes/1234/01');
app.use('/1234/01', routes_1234_01);

const routes_1234_02 = require('./routes/1234/02');
app.use('/1234/02', routes_1234_02);


const routes_1234_03 = require('./routes/1234/03');
app.use('/1234/03', routes_1234_03);


const routes_1234_test1 = require('./routes/1234/test1');
app.use('/1234/test1', routes_1234_test1);


const routes_1234_test1 = require('./routes/1234/test1');
app.use('/1234/test1', routes_1234_test1);

