
const express = require('express');
const router = express.Router();
const MensRaking = require('../mens100m/src/models/mens');
const mongoose = require('mongoose');


// saving the data into database through API(Post)
router.post("/mens", async(req, res)=>{
    try{
        const new_user = new MensRaking(req.body);
        console.log(req.body);
       const new_Entry = await new_user.save();
       res.status(201).send(new_Entry);
    }
    catch(err){
        res.status(400).send(err);
    }
})


//  to get all data from the database through API(all data)
router.get("/mens", async(req, res)=>{
    try{
       const data = await MensRaking.find({});
       res.status(201).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }
})


// to get all data in the sorted manner
router.get("/mens", async(req, res)=>{
    try{
       const data = await MensRaking.find({}).sort({"ranking":1});
       res.status(201).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }
})



// to get the data of one of the User only(individual data)
router.get("/mens/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
       const data = await MensRaking.findById({_id:_id});
       //                                 left id -->database id and right id --> user request id
       res.status(201).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// now updating the data of any user(PATCH)
router.patch("/mens/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
       const data = await MensRaking.findByIdAndUpdate(_id,{
            "name" : req.body
       });
    
        res.status(201).send(data);
    }
    catch(err){
        res.status(500).send(err);
    }
})



//now delete the data from the database

router.delete("/mens/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
       const data = await MensRaking.findByIdAndDelete(req.params.id);
    
                                
       res.status(201).json({message:"User deleted"}).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;