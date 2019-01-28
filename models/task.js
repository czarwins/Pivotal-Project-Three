const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Task = new Schema({
    type: String,
    processStep: String,
    subtaskIds:[{
        type: Schema.Types.ObjectId,
        ref: 'Subtask'
    }]
    ,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]

})

module.exports = mongoose.model('Task', Task)