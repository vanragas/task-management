const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();
//api/v1/users
router.route('/').get(userController.getAllUsers);

module.exports = router;
