const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Task = new Schema({
    title: String,
    description: String
})

module.exports = mongoose.model('Task', Task)

