import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import { CronJob } from "cron";
import * as dotenv from 'dotenv'
dotenv.config()

//local module
import usersRoute from './routes/users.js';
import productsRoute from './routes/products.js'
import tablesRoute from './routes/tables.js'
import prorductOrderRoute from './routes/pemesanan_produk.js'
import paymentRoute from './routes/pembayaran.js'
import tablesOrderRoute from './routes/order_tables.js'

import { updateDataEveryday } from "./controllers/pemesanan_produk.js";

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

const addData = new CronJob(
  '00 7 * * *',
	function() {
		updateDataEveryday()
	},
  null,
	true,
  "Asia/Jakarta"
)

// addData.start()

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.use('/products', productsRoute);

app.use('/tables', tablesRoute);

app.use('/productorder', prorductOrderRoute)

app.use('/payment', paymentRoute)

app.use('/tablesorder', tablesOrderRoute)

app.get('/', (req, res) => {
  console.log("Hello From Indexjs");

  res.send('hello from the other side');
})


mongoose.connect(process.env.CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connect to DB!'))

app.listen(port, () => console.log(`Server are running from http://localhost:${port}`))