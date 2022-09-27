import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());

const _dirname = path.resolve();

app.get('/', (req, res)=>{
    res.sendFile(path.join(_dirname, 'client', 'index.html'))
})

app.listen(PORT, () =>{
    console.log(`Hello this server is running on port ${PORT}`)
});