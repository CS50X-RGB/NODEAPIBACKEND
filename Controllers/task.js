import Task from "../Models/task.js";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;
  // const task = new Task({title});
  // task.save()
  await  Task.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    sucess:true,
    message:`${Task.title} is added Successfully`
  })
};

export const getMyTasks = async(req,res,next) =>{
    const userid = req.user._id;
    const tasks = await Task.find({user:userid});
    res.status(200).json({
        sucess:true,
        tasks,
    })
}
export const isComp = async(req,res,next) =>{
    const { id } =  req.params;
    const task = await Task.findById(id);
    if(!task){
        return res.status(404).json({
            sucess:false,
            message:"Task not found",
        })
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
        sucess:true,
        message:"Task Updated!"
    })
}
export const isDone = async(req,res,next) =>{
    const {id} = req.params;
    const tasks = await Task.findById(id);
    if(!tasks){
        return res.status(404).json({
            sucess:false,
            message:"Task not found",
        })
    }
    await Task.deleteOne({ _id: id });
    res.status(200).json({
        sucess:true,
        message:"Task Deleted!"
    })
}