const Project = require('../models/Project')
const Task = require('../models/Task')

const mongoose = require('./connections')

const item1 = new Task({
    type: "FMEA",
    processStep: "ATM Pin Authentication",
    failureType: "Unauthorized access",
    potentialImpact: "Unauthorized cash withdrawal",
    severity: 8,
    potentialCause: "Lost or stolen ATM card",
    occurence: 3,
    preventionControls: "Block ATM card after 3 failed attempts",
    detection:3,
    rpn: 72,
    notes: []
})

const item2 = new Task({
    type: "FMEA",
    processStep: "ATM Pin Authentication",
    failureType: "Authentication failure",
    potentialImpact: "Annoyed customer",
    severity: 3,
    potentialCause: "Network failure",
    occurence: 5,
    preventionControls: "Install load balanecer to distribute workload across network links",
    detection: 5,
    rpn: 75,
    notes: []
})

const item3 = new Task({
    type: "FMEA",
    processStep: "Dispense Cash",
    failureType: "Cash not disbursed",
    potentialImpact: "Dissatisfied customer",
    severity: 7,
    potentialCause: "ATM out of cash",
    occurence: 7,
    preventionControls: "Internal alert of low cash in ATM",
    detection: 4,
    rpn: 196,
    notes: []
})

const project1 = new Project({
    name: "ATM Process Improvement Project",
    type: "DMAIC",
    tasks:[item1, item2, item3]
})

Project.remove({})
    .then(() => Task.remove({}))
    .then(() => Task.insertMany([item1, item2, item3]))
    .then(() => project1.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())