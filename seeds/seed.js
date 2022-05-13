const mongoose = require('mongoose');
const KayakModel = require('./models/kayaks');
// const dataFile = require('./dataArray')

//Starting server from function from the docs
main().catch(err => console.log(err));

async function main() {
    //Set the localhost address to the correct DB in this case kayakShop, don't change the port
    await mongoose.connect('mongodb://localhost:27017/kayakShop');
    //log if the DB is actively running
    console.log('mongoose connected');
}

//create an expression to seed the DB with data

////// The block below is used to import an array of data from the file dataArray.js///////////////////////////////////
// KayakModel.insertMany(dataFile)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err)
//     })





