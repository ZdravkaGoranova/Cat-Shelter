console.log("Start coding sait ...");

const express = require('express');

const config = require('./config/index.js');// require('./config');
const app = express();

const setupViewEngine = require('./config/viewEngine.js');//require('./config/viewEngine.js')(app)
setupViewEngine(app);

app.use(express.static('src/public'));


app.get('/', (req, res) => {
    res.render('index')
});
app.get('/addCat', (req, res) => {
    res.render('addCat')
});
app.get('/addBreed', (req, res) => {
    res.render('addBreed')
    });
app.get('/', () => {

});



app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}...`)
});