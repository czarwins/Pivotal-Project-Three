const Project = require('../models/Project')
const Task = require('../models/Task')

const ProjectController = { 
    index: (req, res) => {
        Project.find({})
            .then((projects) => {
                res.send(projects)
            })
    },
    show: (req, res) => {
        Project.findById(req.params.projectId).populate('tasks')
            .then((project) => {
                res.send(project)
            })
    },
    update: (req, res) => {
        Project.findByIdAndUpdate(req.params.projectId, req.body)
            .then((updatedProject) => {
                updatedProject.save()
                res.send(updatedProject)
            })
    },
    delete: (req, res) => {
        Project.findByIdAndDelete(req.params.projectId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Project.create(req.body)
            .then((project) => {
                console.log(project)
                res.send(project)
            })
    }
}

module.exports = ProjectController