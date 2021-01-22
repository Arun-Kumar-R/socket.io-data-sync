const mongoose = require('mongoose');

// @schema model for create Task 
const Schema = {
    task: {
        type: String,
        required: true,
    }
}

// @set collection name and Schema
const CollectionName = "Task";
const TaskSchema = mongoose.Schema(Schema);


const Task = mongoose.model(CollectionName, TaskSchema );

module.exports = Task;