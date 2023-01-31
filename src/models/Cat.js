const db = require('../../db.json');
const fs = require('fs')
const path = require('path')

class Cat {
    constructor(name, description, image, breed) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.breed = breed;
    }
    static  save(cat) {

        db.cats.push(cat);
        const jsonData = JSON.stringify(db);

         fs.writeFileSync(path.resolve(__dirname, '../../db.json', jsonData))

    }
}

module.exports = Cat;