const Tasks = require('../../model/task');
const { validationResult } = require('express-validator');

// create task API
const CreateTask = (req, res) => {
    const io = req.app.get('socketio');
    console.log(io);
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        res.status(422).json({
            message: errors.array()
        });
    } else {
            const TaskData = {
                task: req.body.task,
            }
            const saveTask = new Tasks(TaskData);
            saveTask.save((err, data) => {
                if(err) {
                    console.log(err.message);
                    res.status(400).json({
                        success: false,
                        message: 'Could not save the Task'
                    });
                } else {
                    console.log(data);
                    io.emit('Task', data);
                    res.status(201).json({
                        success: true,
                        message: 'Task saved Successfully'
                    });
                }
            });
    }
}

module.exports = CreateTask;
