const express=require('express');
const proSchema= require('./productSchema');
const router=express.Router();

router.get('/', async (req,res)=>{
    try{
        const products = await proSchema.find();
        res.json(products);
    }catch(err){
        res.json({message:err})
    }
});

module.exports=router;