const mongoose = require('mongoose');


const productSchema= mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    image1:{
        data: Buffer,
        contentType: String,
        
    },
    image2:{
        data: Buffer,
        contentType: String,
        
    },
    image3:{
        data: Buffer,
        contentType: String,
       
    },
   
    cost:{
        type:String,
        required:true},
    name:{
            type:String,
            required:true},
    description: {
      
            type:String,
        required:true
        },
    contact:{
            type:String,
            required:true },
    category:{
             type:String,
             required:true},
    
});

module.exports=mongoose.model('proSchema',productSchema);