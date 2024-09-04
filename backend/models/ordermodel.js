const mongoose =require('mongoose');

const orderschema = new mongoose.Schema({
    cartItems: Array,
    amount:String,
    status:String,
    createdAt:Date
})

const ordermodel  =mongoose.model('order',orderschema);

module.exports =ordermodel;