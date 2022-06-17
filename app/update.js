import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
// import cors from 'cors';
import { CronJob } from "cron";
import * as dotenv from 'dotenv'
import moment from 'moment'
dotenv.config()


mongoose.connect(process.env.CONN_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log(`Connect to DB!`))


import { updateDataEveryday } from "./controllers/pemesanan_produk.js";

function runUpdate (){
  updateDataEveryday()
  console.log(`DATA UPDATED\n${moment().toDate()}`)
}

runUpdate()

