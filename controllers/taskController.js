const Project = require('../models/Project')
const Task = require('../models/Task')
const Subtask = require('../models/Subtask')

const tasksController = {
    index: (req, res) => {
        var projectId = req.params.projectId
        Project.findById(projectId).populate('tasks')
            .then((project) => {
                res.send(project.tasks)
            })
    },
    show: (req, res) => {
        var taskId = req.params.taskId
        Task.findById(taskId)
            .then((task) => {
                res.send(task)
            })
    },
    delete: (req, res) => {
        var taskId = req.params.taskId
        Task.findByIdAndDelete(taskId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var taskId = req.params.taskId
        Task.findByIdAndUpdate(taskId, req.body, { new: true })
            .then((updatedTask) => {
                updatedTask.save()
                res.send(updatedTask)
            })
    },
    
    create: (req, res) => {
        var projectId = req.params.projectId
        Project.findById(projectId)
            .then((project) => {
                console.log(project)
                Task.create(req.body)
                    .then((newTask) => {
                        console.log(newTask)
                        project.tasks.push(newTask)
                        project.save()
                        res.send(newTask)
                    })
            })
    },
    updateSubtask: (req, res) => {
        var subtaskId = req.params.subtaskId
        Subtask.findByIdAndUpdate(subtaskId, req.body, { new: true })
            .then((updatedSubtask) => {
                updatedSubtask.save()
                res.send(updatedSubtask)
            })
    },
    
    createSubtask: (req, res) => {
        var taskId = req.params.taskId
        Task.findById(taskId)
            .then((task) => {
                console.log(task)
                Subtask.create(req.body)
                    .then((newSubtask) => {
                        console.log(newSubtask)
                        task.subtaskIds.push(newSubtask)
                        task.save()
                        res.send(newSubtask)
                    })
            })
    }

}

module.exports = tasksController