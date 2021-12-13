const express = require('express')

const router = express.Router()
const controls  = require('../controllers/tasks')



router.route('/').get(controls.getAllTask).post(controls.createTask);
router.route('/:id').get(controls.getTask).patch(controls.updateTask).delete(controls.deleteTask);

module.exports = router



