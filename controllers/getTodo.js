const Todo = require("../models/Todo");


exports.getTodo= async(req,res)=>{
    try{
  //fetch all items from database
 const todos= await Todo.find({});

 //response
 res.status(200).json({
    success:true,
    data:todos,
    message:"entire data is fetched",
 });
    }
    catch(err){
       console.error(err);
       res.status(500).json({
        success:false,
        error:err.message,
        message:"server mmai error",
       })
    }
}

exports.getTodoById= async(req,res)=>{
    try{
     const id = req.params.id;
     const todo=  await Todo.findById({_id: id})

     //data for given id not found
     if(!todo){
        return res.status(404).json({
            success:false,
            message:"no data found",
        })
     }
     res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetch`,
     })
          }
          catch(err){
            console.error(err);
            res.status(500).json({
             success:false,
             error:err.message,
             message:"server mmai error",
            })
          }
      }
