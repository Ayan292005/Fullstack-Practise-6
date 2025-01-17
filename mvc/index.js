import express from "express"

const app=express()

import cors from "cors"

import { config } from "dotenv"

import "./config/config.js"
import { route } from "./routers/router.js"

app.use(express.json())
app.use(cors())
config()

app.use("/furniture",route)

app.listen(4050,()=>{
    console.log("4050 port");
    
})