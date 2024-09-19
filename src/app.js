import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: '16kb'})) // json format mein data ayega
app.use(express.urlencoded({extended: true, limit: '16kb'})) // url se jo data ayega us ko decode krna 
app.use(express.static('public'))

app.use(cookieParser()) 

export {app}