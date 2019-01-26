const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Task = new Schema({
    type: String,
    processStep: String,
    failureType: String,
    potentialImpact: String,
    severity: Number,
    potentialCause: String,
    occurence:Number,
    preventionControls: String,
    detection:Number,
    rpn: Number,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]

})

module.exports = mongoose.model('Task', Task)