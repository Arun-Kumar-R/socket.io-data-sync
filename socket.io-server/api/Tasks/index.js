const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

// CUSTOM MODULES
const TaskAPI = require('./task');

// USERS ROUTES 
router.post('/create-task', [
    check('task').notEmpty(), 
], TaskAPI);


module.exports = router;
