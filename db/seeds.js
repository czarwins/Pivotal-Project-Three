const Project = require('../models/Project')
const Task = require('../models/Task')
const mongoose = require('./connections')

const charter = new Task({
    title: "Project Charter",
    description: "This form outlines the goals for the project."
})

const dataPlan = new Task({
    title: "Data Collection Plan",
    description: "The plan includes information around where to collect data, how to collect it, when to collect it."
})

const elon = new Project({
    projectname: "Lean Six Sigma Project",
    description: "A process improvement project to fix broken processes.",
    tasks: [charter, dataPlan]
})

Project.remove({})
    .then(() => Task.remove({}))
    .then(() => Task.insertMany([mars, tesla]))
    .then(() => elon.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())