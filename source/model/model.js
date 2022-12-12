const mongoose=require('mongoose');

const TodoSchema=mongoose.Schema({
    Title:String,
    Description:String,
    Completed:Boolean,
})

const TodoList=mongoose.model("todo",TodoSchema);
module.exports={TodoList};