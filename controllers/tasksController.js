const Project = require('../models/Project')
const Task = require('../models/Task')

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
    }

}

module.exports = tasksController