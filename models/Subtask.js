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
        rpn: Number
})

module.exports = mongoose.model('Subtask', Subtask)