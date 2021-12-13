const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

// get all task
const getAllTask = asyncWrapper( async (req, res) => {
    
        const tasks = await Task.find({})
        res.status(200).json({ tasks: tasks })
})  
// create one task
const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json(task)
}) 

// get a particular task you want
const getTask = asyncWrapper(async (req, res, next) => {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            const error = new Error('Not Found');
            error.status = 404;
            return next(error)
           // return res.status(404).json({ msg: `No task with id: ${taskId}` })
        }

        res.status(200).json({ task })
}) 

// update the particular task you want
const updateTask = asyncWrapper(async (req, res) => {
        const {id:taskId} = req.params;
       const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {new:true, runValidators: true});
       if(!task){
           return res.status(404).json({msg: `no document found`})
       }
        res.status(200).json({data:task});
}) 
// delete the particluar task you want to delete it
const deleteTask = asyncWrapper(async (req, res) => {

        const { id: taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId });

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskId}` })

        }
        res.status(200).send();
}) 

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    getTask,
    updateTask,
}