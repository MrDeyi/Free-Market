const express = require('express');
const mongoose = require('mongoose');
const fs =require('fs');
const path = require('path');
const proSchema= require('./productSchema');
const getRequests = require('./getRequests');
const cors = require('cors');
const multer  = require('multer');


const app= express();
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb+srv://mandilake:mike1@test.1ednj.mongodb.net/test',
{useNewUrlParser:true},()=>console.log('connected')
);
app.use('/',getRequests);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images');
    },
    filename: function (req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now());
    }
  })
  
  const upload = multer({ storage: storage });
  
app.post('/upload', upload.array('images',3),async (req,res)=>{

    const reqFiles = [];
   // const rd= path.join(__dirname + '/images/')
  //  const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i])
    }

    const post= new proSchema({
        name:req.body.name,
        description:req.body.description,
        cost:req.body.cost,
        image1:{data:fs.readFileSync(reqFiles[0].path).toString('base64'),
                  contentType:  reqFiles[0].mimetype},
        image2:{data:fs.readFileSync(reqFiles[1].path).toString('base64'),
                     contentType:  reqFiles[1].mimetype},
        image3:{data:fs.readFileSync(reqFiles[2].path).toString('base64'),
                contentType: reqFiles[2].mimetype},
        contact:req.body.contact,
        category:req.body.category,
        id:'6',
       
    });
    try{
        const savedprod = await post.save();
         res.json(savedprod);
    }catch(err){
        res.json({message:err});
    }
})
const port=process.env.PORT || 8080;

app.listen(port,()=>console.log(`server running ${port}`));
