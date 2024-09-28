const express = require('express');
const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController');

const router = express.Router();
//api/v1/tasks
router
  .route('/')
  .get(authController.protect, taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'team-lead'),
    taskController.deleteTask,
  );
module.exports = router;
