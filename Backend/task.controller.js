// let { taskId } = require('./users');
// let { tasks } = require('./users');
// const mongoClient = require('mongodb').MongoClient;
// const mongoUri = '';
// mongoClient.connect(mongoUri, ()=>{

// })
const { taskModel } = require('./taskModel');

const getTasks = async (req, res) => {
    try {
        const result = await taskModel.find({});
       
       const sendResult = result.map(R=>{
            return {
                id : R._id ,name :  R.name , email :  R.email, number :  R.number
            }
        })
        res.send(sendResult);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'DB Connection Failed!!' })
    }
}

const getTaskById = (req, res) => {
    const id = req.query.id;
    return res.send(tasks.filter(task => task.id === id));
}

const updateTask = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await taskModel.updateOne({_id : req.body.id}, {name : reqBody.name, email : reqBody.email, number : reqBody.number});
        res.send({message : 'Successful'})
    } catch(e) {
        console.log('Kahitari ganla')
    }   

}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.query.id;
        await taskModel.deleteOne({_id : taskId});
        res.send({message : 'Deleted'})
    } catch(e) {
        alert(e)
    }
}

const addTask = async (req, res) => {
    const Task = {
        name,
        email,
        number
    } = req.body

    try {
        await taskModel.create(Task)
        return res.json({ message: 'User added successfully' });
    } catch (e) {
        console.log(e)
    }

}

module.exports = {
    getTasks: getTasks,
    getTasksById: getTaskById,
    updateTask: updateTask,
    deleteTask: deleteTask,
    addTask: addTask
}