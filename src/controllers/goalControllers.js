const asyncHandler = require('express-async-handler');
const Goal= require('../models/goalModels')

const getGoals = asyncHandler(async(req,res)=>{
    const goals = await Goal.find();
    res.status(200).json(goals)
})

const createGoals= asyncHandler(async(req,res)=>{
    const body = req.body
    if(!body.text){
        throw new Error('please provide goals')
    }
    const goal = await Goal.create({text:body.text})
    res.status(201).json({message:'success created goal',data:goal})
})

const updateGoal = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
 if(!goal){
    throw new Error('goal not exist')
 }
 const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message:`success updated goal of ${req.params.id}`,data:updateGoal})
})


const deleteGoal = asyncHandler(async(req,res)=>{
    let deleteId = req.params.id;
    const goal = await Goal.findById(req.params.id)
    if(!goal){
       throw new Error('goal not exist')
    }
    const deleteGoal = await Goal.deleteOne({_id:req.params.id})

    res.status(200).json({message:`success deleted goal of ${req.params.id}`})
})


module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal

}