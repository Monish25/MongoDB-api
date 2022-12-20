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
        const datasave = await data.save();
        res.status(200).json(datasave);
    } 
    catch (error) {
        res.status(400).json({message: error.message});
    }

});

router.get('/getAll',async (req,res)=>{
    // res.send("GET all APIs");
    try {
        const data= await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
router.get('/getOne/:id',async (req,res)=>{
    // res.send(req.params.id);
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
router.patch('/update/:id',async (req,res)=>{
    // res.send("update by  ID API")
    try {
        const id = req.params.id;
        const updata= req.body;
        const options = {new:true};
        const result = await Model.findByIdAndUpdate(
            id,updata,options
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({message:error.message});
    }

});
router.delete('/delete/:id',async (req,res)=>{
    // res.send('Delete by API');
    try {
        const id = req.params.id;
        const result = await Model.findByIdAndDelete(id);
        res.send("Document with ${datas2.name} has been deleted");
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


