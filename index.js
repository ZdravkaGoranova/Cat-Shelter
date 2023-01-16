const http = require('http');

const homePage = require('./views');//homePage= require('./views/index.js');
const siteCss = require('./css/site.css.js');
const editCat = require('./views/editCat.js');
const cats = require('./cats.json');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });


    if (req.url == "/") {
        res.write(homePage);

    } else if (/cats\/\d+\/edit/.test(req.url)) {
        let catId = req.url.split('/')[2];//взимаме номера на котката
        let cat = cats.find(x => x.id == catId);
        res.write(editCat(cat));

    } else if (req.url == "/css/site.css") {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        res.write(siteCss);

    // } else if (req.url == "./views/editCat") {
    //     res.writeHead(200, {
    //         'Content-Type': 'text/css',
    //     });
    //     res.write(editCat);

    } else {
        res.write(`
        <h1>404</h1>
        `)
    }
    res.end();
});

server.listen(5000);
console.log('Server is running on port 5000 ...');

//С [Ctrl +F5]-стартира автоматично index.js
// или node .\index.js