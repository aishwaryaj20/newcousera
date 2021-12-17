const express=require('express');
const mongoose=require('mongoose');
const courseModel = require('../models/course.model');
// const degreeModel = require('../models/course.model');

const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const user_data=await courseModel.create(req.body)
        return res.status(201).json({data:user_data})
        
    }catch(err){
        return res.status(400).json({message:err.message,status:"Invalid Data"})
    }
})

router.get("/",async(req,res)=>{
    try{
        const user_data=await courseModel.find({}).lean().exec();
        return res.status(200).json({data:user_data})
    }catch(err){
        res.status(400).json(err)
    }
}
)

module.exports=router;