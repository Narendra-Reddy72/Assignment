const TODO = require('../models/todoModel')

exports.getAllTodos = async(req,res)=>{
    try{
        const todos = await TODO.find({});
        
        res.status(201).json({success:true,data:todos})
    }catch(err){

        res.status(500).json({sucess:false,message:err.message})
    }
}

exports.createTodo = async(req,res)=>{

    const { title, description} = req.body
    
    try{
        const todo = new TODO({title,description});

        await todo.save();
        
        res.status(201).json({success:true,data:todo})
    }catch(err){

        res.status(500).json({sucess:false,message:err.message})
    }
}