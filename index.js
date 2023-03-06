import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from "./db.js"
import allRoutes from "./routes/allRoutes.js"
const app = express()
dotenv.config()
dataBaseConnection();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Working Fine")
})

app.use("/route",allRoutes)

app.listen(process.env.PORT)