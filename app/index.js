import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose'

import usersRoute from './routes/users.js';

const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json());

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  console.log("Hello From Indexjs");

  res.send('hello from the other side');
})


mongoose.connect('mongodb+srv://Oryto21:M1475963@cluster0.ar1x3.mongodb.net/rollaascafe', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connect to DB!'))

app.listen(port, () => console.log(`Server are running from http://localhost:${port}`))