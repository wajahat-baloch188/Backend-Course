// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB().then(()=>{
  app.on('error',(err)=>{
    console.log("err", err);
    throw err;
  })

  app.listen( process.env.PORT || 8000,()=>{
   console.log(`port is listening on ${process.env.PORT}`);
  })
}).catch((err)=>{
  console.log("Mongo db connection failed", err)
})

/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`PORT is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
 */
