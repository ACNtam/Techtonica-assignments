import express  from "express";
import path from "path"

//imported because error message __dirname was undefined
import { dirname } from 'path';

//get current absolute path
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express()

// created get route, accepts get request
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname, "about.html"))
})
app.get("/contactme", (req,res)=>{
    res.sendFile(path.join(__dirname, "contactme.html"))
})
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "404.html"))
})


app.listen(8081, ()=>{
    console.log('server listening at port 8081')
})