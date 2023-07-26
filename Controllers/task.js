import Task from "../Models/task.js";
import ErrorHandler from "../middleware/error.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    // const task = new Task({title});
    // task.save()
    await Task.create({
      title,
      description,
      user: req.user,
    });
    res.status(201).json({
      sucess: true,
      message: `${Task.title} is added Successfully`,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });
    if (!tasks) {
      return next(new Error("Inavlid"));
    }
    res.status(200).json({
      sucess: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};
export const isComp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return next(new ErrorHandler("Invalid Task ID", 404));
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      sucess: true,
      message: "Task Updated!",
    });
  } catch (error) {
    next(error);
  }
};
export const isDone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findById(id);
    if (!tasks) {
      return next(new ErrorHandler("Inavlid Id", 404));
    }
    await Task.deleteOne({ _id: id });
    res.status(200).json({
      sucess: true,
      message: "Task Deleted!",
    });
  } catch (error) {
    next(error);
  }
};
