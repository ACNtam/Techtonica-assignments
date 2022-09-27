import express from "express";
import cors from "cors";
import fetch from "node-fetch";


const app = express()
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
    res.json("This is a test")
})

app.get('/api', async (req,res)=>{
    const url = "https://catfact.ninja/fact"
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
})

app.listen(port, () => {
    console.log(`/This server is running on port ${port}`)
})