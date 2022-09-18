import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import {decode} from 'html-entities';

const app = express();
const PORT = 8080;

app.use(cors());

//bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//fetching data from api
app.get('/questions', async (req, res) => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean');
    const data = await response.json();
    //decoded the special characters in the questions
    let result = data.results.map((question)=>{
        return {...question,question:decode(question.question)}
    })
    res.json(result)
})



app.listen(PORT, () => console.log(`Server is running ${PORT}`));
