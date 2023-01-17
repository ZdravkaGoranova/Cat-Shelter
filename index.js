const http = require('http');
const fs = require('fs/promises');
const fss = require('fs');
//const path = require('path');
const querystring = require('querystring');


const cats = require('./cats.json');

//Зареждаме страниците от string документ
// const homePage = require('./viewsOld');//homePage= require('./views/index.js');
// const siteCss = require('./css/site.css.js');
// const editCat = require('./viewsOld/editCat.js');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    if (req.url == "/") {
        const homePage = await readFile('./views/home.html');

        const catsHtml = cats.map(cat => catTamplate(cat)).join('');
        const result = homePage.replace('{{cats}}', catsHtml);

        res.write(result);

        //втори вариянт без async
        // fs.readFile('./views/home/index.html',{encoding:'utf-8'})
        // .then(homePage=>{res.write(homePage)}).catch(err=>{conole.log(err)});

    } else if (/cats\/\d+\/edit/.test(req.url)) {
        //по-късно ще ни трябват
        // let catId = req.url.split('/')[2];//взимаме номера на котката
        // let cat = cats.find(x => x.id == catId);

        let editCatHtml = await readFile('./views/editCat.html');
        let qsData = querystring.parse(req.url.split('?')[1]);
        console.log(qsData);

        res.write(editCatHtml);

        // res.write(editCat(cat)); const editCat = require('./viewsOld/editCat.js');
    } else if (req.url == "/css/site.css") {
        res.writeHead(200, {
            'Content-Type': 'text/css',
        });
        const siteCss = await readFile('./content/style/site.css')
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

function readFile(path) {
    return fs.readFile(path, { encoding: 'utf-8' });//връща promises
};
function catTamplate(cat) {
    const html = fss.readFileSync('./views/partials/cat.html', { encoding: 'utf-8' });

    const modifiedHtml = Object.keys(cat).reduce((result, key) => {
        return result.replaceAll(`{{${key}}}`, cat[key]);
    }, html)

    return modifiedHtml;

    //Втори вариянт без reduce
    // let result = html.replaceAll('{{name}}', cat.name);
    // result = result.replace('{{breed}}', cat.breed);
    // result = result.replace('{{imageUrl}}', cat.imageUrl);
    // result = result.replace('{{description}}', cat.description);
    //return result;
};


server.listen(5000);
console.log('Server is running on port 5000...');

