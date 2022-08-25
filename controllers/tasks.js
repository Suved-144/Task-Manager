const task = require('../models/task.js')
const Task = require('../models/task.js')
const getAllTasks =async(req,res)=>{
    try{
        const task = await Task.find()
        res.status(201).json({task})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"there is some error look into in terminal"})
    }
    
}

const createTask =async (req,res)=>{
    try{
    const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"there is some error look into in terminal"})
    }
}

const getTask =async(req,res)=>{
    try{
        const id = req.params.id
        const task = await Task.findOne({_id:id})    
        if(!task){
            return res.status(404).json({msg:`no any task with id : ${id}`})
        }
        res.status(201).json({task})
    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"There is some problem ,look into terminal"})
    }
}

const deleteTask =async(req,res)=>{
    try{
        const id = req.params.id
        
        const task = await Task.findOneAndDelete({_id:id})    
        if(!task){
            return res.status(404).json({msg:`no any task with id : ${id}`})
        }
        res.status(200).json({"deleted":task})
    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"There is some problem ,look into terminal"})
    }
    
}

const updateTask =async(req,res)=>{
    try{
        const id = req.params.id;
        const task=await Task.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true
        })
        
        if(!task){
            return res.status(404).json({msg:`no any task with id : ${id}`})
        }
        res.status(200).json({"updated":task})
    }

    
    catch(err)
    
    {
        console.log(err)
        res.status(501).json({msg:"There is some problem ,look into terminal"})

    }
    
}

module.exports = {getAllTasks, createTask, getTask , updateTask, deleteTask }