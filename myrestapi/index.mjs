// This will be your express server

import express from "express";
import cors from "cors";
import path from "path";
import booksRoutes from "./routes/index.mjs";  

const app = express()

//middleware, allows to be able to request body to json
app.use(express.json())

// book routes, middleware 
app.use(booksRoutes)

// make client folder public
app.use(express.static("client"))

// send client index.html file for all client get request
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "client", "index.html"))
})

//created a server at port 3000
app.listen(3000,()=>{
    //server is listening for request
    console.log("Server listening at port 3000")
})