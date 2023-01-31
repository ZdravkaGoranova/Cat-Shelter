const Cat = require('../models/Cat.js');

exports.getCreateCat = (req, res) => {
    res.render('addCat')
};

exports.postCreateCat = async (req, res) => {
// let form = new formidable.IncomingForm();
// let imgUrl='';
    console.log(req.body)
    res.send('Form submittet')

    // //save
    const { name, description, image, breed } = req.body
    let cat = new Cat({name, description, image, breed})
    await cat.save();

    // //redirect
    res.redirect('/')
};
