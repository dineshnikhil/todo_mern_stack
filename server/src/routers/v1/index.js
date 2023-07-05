const express = require('express');
const router = express.Router();

const TodoControllers = require('../../controllers/todo-controllers');

router.post('/todo', TodoControllers.create);

module.exports = router;
