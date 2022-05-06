import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoute from './routes/users.js';
import productsRoute from './routes/products.js'

const app = express();
let port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
  cors({
    origin: "*",
    credentials: true
  })
)

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.use('/products', productsRoute)

app.get('/', (req, res) => {
  console.log("Hello From Indexjs");

  res.send('hello from the other side');
})


mongoose.connect('mongodb+srv://Oryto21:M1475963@cluster0.ar1x3.mongodb.net/rollaascafe', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connect to DB!'))

app.listen(port, () => console.log(`Server are running from http://localhost:${port}`))