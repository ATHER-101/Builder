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


const routes_2345_test1 = require('./routes/2345/test1');
app.use('/2345/test1', routes_2345_test1);


const routes_2345_test2 = require('./routes/2345/test2');
app.use('/2345/test2', routes_2345_test2);


const routes_2345_test3 = require('./routes/2345/test3');
app.use('/2345/test3', routes_2345_test3);


const routes_2345_test4 = require('./routes/2345/test4');
app.use('/2345/test4', routes_2345_test4);


const routes_2345_first = require('./routes/2345/first');
app.use('/2345/first', routes_2345_first);


const routes_2345_test5 = require('./routes/2345/test5');
app.use('/2345/test5', routes_2345_test5);

