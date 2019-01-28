const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Note = new Schema({
    taskId: String,
    text: String
});