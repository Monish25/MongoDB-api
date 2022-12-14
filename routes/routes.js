const express=require('express');
const router = express.Router();
const Model = require('../model/model');
module.exports=router;


router.post('/post', async (req,res) =>{
    const data = new Model({
        name:req.body.name,
        age:req.body.age
    })

    try {
        const datasave = data.save();
        res.status(200).json(datasave);
    } 
    catch (error) {
        res.status(400).json({message: error.message});
    }

});

router.get('/getAll',(req,res)=>{
    res.send("GET all APIs");
});
router.get('/getOne/:id',(req,res)=>{
    res.send(req.params.id);
});
router.patch('/update/:id',(req,res)=>{
    res.send("update by  ID API")
});
router.delete('/delete/:id',(req,res)=>{
    res.send('Delete by API');
})


