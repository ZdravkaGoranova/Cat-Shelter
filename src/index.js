console.log("Start coding sait ...");

const express = require('express');
const app = express();

const config = require('./config/config.js');

app.get('/', (req, res) => {
    res.send('Home page')
});
app.get('/addBreed', () => {

});
app.get('/addCat', () => {

});
app.get('/', () => {

});



app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}...`)
});