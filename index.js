const express = require('express');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const routes_2345_test1 = require('./routes/2345/test1');
app.use('/2345/test1', routes_2345_test1);
