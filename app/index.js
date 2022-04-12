import bodyParser from "body-parser";
import express from "express";

import usersRoute from './routes/users.js';

const app = express();
const port = 8000;


app.use(bodyParser.json());

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  console.log("Hello From Indexjs");

  res.send('hello from the other side');
})

app.listen(port, () => console.log(`Server are running from http://localhost:${port}`))