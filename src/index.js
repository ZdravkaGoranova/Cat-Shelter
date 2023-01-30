console.log("Start coding sait ...");

const express = require('express');

const routes = require('./routes.js');

const config = require('./config/index.js');// require('./config');
const app = express();

const setupViewEngine = require('./config/viewEngine.js');//require('./config/viewEngine.js')(app)
setupViewEngine(app);


app.use(express.static('src/public'));

app.use(routes);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}...`)
});