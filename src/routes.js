
const express = require('express');
const Router = express.Router;
const router = Router();

const catController = require('./controllers/catController.js')

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/addCat', catController.getCreateCat)


router.get('/addBreed', (req, res) => {
    res.render('addBreed')
});


module.exports=router;