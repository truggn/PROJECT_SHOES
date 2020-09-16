
const mongoose = require('mongoose');


async function connect(){
        try {
            await mongoose.connect('mongodb://127.0.0.1/Project_Shoes', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                });

                console.log("Connect db Successfully");

        } catch (error) {

                console.log('Connect db False!');
        }
}

module.exports = { connect };