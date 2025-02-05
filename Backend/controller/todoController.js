const Todo = require('../models/todoSchema');

exports.getTodos = async (req,res)=>{
    try {
        const todo = await Todo.find();
        res.status(200).json(todo);
    } catch (error) {
        res.statu(500).json({error:"Internal server error"})
    }
}

exports.createTodo= async (req,res)=>{
    const {task, details}=req.body;
    try {
        const todo = Todo.create({task, details});
        // await todo.save();
        res.status(201).json({message:"Todo created successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}


exports.updateTodo = async (req,res)=>{
    const {task, details}=req.body;
    const {id}=req.params;
    try {
        const todo = await Todo.findByIdAndUpdate(id,{task, details});
        res.status(200).json({message:"Todo updated successfully"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}

exports.deleteTodo = async(req,res)=>{
    const{id}=req.params;
    try {
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({message:"Todo deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}   

