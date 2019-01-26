const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Project = new Schema({
    name: String,
    type: String,
    tasks:[{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('Project', Project)