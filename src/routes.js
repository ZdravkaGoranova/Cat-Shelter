
const express = require('express');
const Router = express.Router;
const router = Router();

const catController = require('./controllers/catController.js')
const homeController = require('./controllers/homeController.js')
const breedController = require('./controllers/breedController.js')

router.get('/', homeController.getHomePage);

router.get('/addCat', catController.getCreateCat)

router.get('/addBreed', breedController.getCreateBreed);


module.exports = router;