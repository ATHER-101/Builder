const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const routes_2345_test1 = require('./routes/2345/test1');
app.use('/2345/test1', routes_2345_test1);

const routes_2345_amit = require('./routes/2345/amit');
app.use('/2345/amit', routes_2345_amit);


const routes_2345_todo = require('./routes/2345/todo');
app.use('/2345/todo', routes_2345_todo);

