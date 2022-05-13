const mongoose = require('mongoose')

const KayakSchema = new mongoose.Schema({
    brand: String,
    model: String,
    type: String,
    qty: Number,
    price: Number,
    size: Number,
    tandum: Boolean
});

//compiling the Schema and adding to exports

const Kayak = mongoose.model('Kayak', KayakSchema)
module.exports = Kayak;
