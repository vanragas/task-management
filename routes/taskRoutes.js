const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();
//api/v1/tasks
router
  .route('/')
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);
module.exports = router;
