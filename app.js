const serverPort = 3000;
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose')
const Kayak = require('./models/kayaks')
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs');
app.use(express.static(__dirname))

//Starting server from function from the docs
main().catch(err => console.log(err));

async function main() {
    //Set the localhost address to the correct DB in this case kayakShop, don't change the port
    await mongoose.connect('mongodb://localhost:27017/kayakShop');
    //log if the DB is actively running
    console.log('mongoose connected');
}


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/home.html'))
})

app.get('/inventory', async (req, res) => {
    const inventory = await Kayak.find({});
    console.log(inventory)
    res.render('inventory', { inventory })
})

app.use('/', router)

app.listen(serverPort, () => {
    console.log(`listening on ${serverPort}`)
})