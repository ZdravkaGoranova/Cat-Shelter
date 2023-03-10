const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,
        //  match: [/^http[s]?:\/\//, 'Invalid URL'],
    },
    breed: {
        type: String,
        required: true,
    }
});


const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;