const { query } = require('express');
const productmodel =require('../models/productmodel');



exports.getproducts = async (req,res,next) =>{
    const query = req.query.keyword?{name :{ 
        $regex:req.query.keyword,
        $options: 'i'
    }}:{}
    const products =await productmodel.find(query)

    res.json({
        success: true,
        products
    })
}
exports.getsingleproducts =async(req,res,next) =>{
    try{
        const product =  await productmodel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    }catch(error){
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
   
    
}