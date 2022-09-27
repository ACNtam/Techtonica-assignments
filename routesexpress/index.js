//this will be my express server 

import express from 'express'; 
import cors from 'cors'; 
import path from 'path'; 

const app = express(); 
const PORT = 3002; 


//middleware
app.use(cors()); 

//configuring path middleware
const __dirname = path.resolve();

//create a route for the index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));

});

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, 'client', '404.html'));
}) 

app.listen(PORT, () => {console.log(`Hello this server is running on ${PORT}`)});


/* 


*/