const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(PORT, () => {
    console.log(`Hello! server is listening on ${PORT}`);
});