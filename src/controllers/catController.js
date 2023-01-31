
const Cat = require('../models/Cat.js');

exports.getCreateCat = (req, res) => {
    res.render('addCat')
};

exports.postCreateCat = (req, res) => {
    console.log(req.body)
    res.send('Form submittet')
    
    //save
    let cat = new Cat(req.body)
    Cat.save(cat);

    //redirect
    res.redirect('/')
};
