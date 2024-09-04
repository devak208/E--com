const mongoose =require('mongoose');

const productschema = new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            Image:String
        }
    ],
    categort:String,
    seller:String,
    stock:String,
    numberofreviews:String,
    createAt:Date
});

const productmodel = mongoose.model('Product',productschema);

module.exports =productmodel;