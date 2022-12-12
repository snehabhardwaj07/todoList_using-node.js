const {TodoList}=require("../Model/model");

const create=async(request,response)=>{
    await TodoList.create(request.body);
    return response.json({data:"Task created"});

}

const read=async(request,response)=>{
    const id=request.query.id;
    if(id){
        var tasks=await TodoList.findById(id);
    }
    else{
        var tasks=await TodoList.find();
    }
    return response.json(tasks);

}

const deleteTodo=async(request,response)=>{
    const id=request.query.id;
    await TodoList.findByIdAndDelete(id);
    return response.json({data:"Task deleted"})
}

const update=async(request,response)=>{
    const id=request.query.id;
    await TodoList.findByIdAndUpdate(id,request.body);
    return response.json({data:"Task Updated"})
}

const updateStatus=async(request,response)=>{
    const id=request.query.id;
    await TodoList.findByIdAndUpdate(id,request.body);
    return response.json({data:"Status Updated"})

}

module.exports={create,read,deleteTodo,update,updateStatus};