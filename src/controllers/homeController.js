
const Cat = require('../models/Cat.js');

exports.getHomePage = async (req, res) => {

    const { search } = req.query;
    let cats = await Cat.find().lean();

    if (search) {
        cats = cats.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()))
    }
    res.render('index', { cats, search });
};
