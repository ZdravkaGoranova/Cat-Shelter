console.log("Start coding sait ...");

const express = require('express');

const routes = require('./routes.js');
const config = require('./config/index.js');// require('./config');
const setupViewEngine = require('./config/viewEngine.js');//require('./config/viewEngine.js')(app)

const app = express();//инстанция на нашия сървър

setupViewEngine(app);
// или require('./config/viewEngine.js')(app);

app.use(express.static('src/public'));//проверяваме дали работи в browser http://localhost:5000/css/site.css
app.use(express.urlencoded({ extended: false }));//връща middleware,който ни парсва urlcoded bodies 
//прочита данните от req и ще ги парсва за всеки req;
app.use(routes);//за всички заявки използвай този router

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}...`)
});