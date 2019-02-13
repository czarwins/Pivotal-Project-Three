const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Project = new Schema({
    projectname: String,
    description: String,
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
})

module.exports = mongoose.model('Project', Project)