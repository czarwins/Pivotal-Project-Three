const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Subtask = new Schema({
    failureType: String,
    potentialImpact: String,
    severity: Number,
    potentialCause: String,
    occurence: Number,
    preventionControls: String,
    detection: Number,
    rpn: Number,
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    },
})

module.exports = mongoose.model('Subtask', Subtask)