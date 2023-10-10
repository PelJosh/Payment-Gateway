import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import axios from "axios";
import { initializePayment } from "./controllers/payment-controller";
import * as dotenv from "dotenv";
import { uuid } from "uuidv4";
import { validatePayment } from "./controllers/payment-controller";
import morgan from "morgan";
import redis from "redis"
// import { createClient } from 'redis';



// const redis = require('redis');
const client = redis.createClient({
    socket: {
        host: '<hostname>',
        port: 5150
    },
    username: '<username>',
    password: '<password>'
});

client.on('error', err => console.log('Redis Server Error', err));


dotenv.config();

const app = express();
app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const datab = mongoose
  .connect("mongodb://localhost:27017/payment")
  .then(() => console.log("connected to mongoDb"));

app.get("/", (req, res) => {
  res.send("josh");
});

// import app from "./app";

app.listen(5150, () => {
  console.log("listening on port 5150");
});

app.post("/initialize-payment", initializePayment);

app.get("/paymentsuccessful/*", validatePayment);



export default app




