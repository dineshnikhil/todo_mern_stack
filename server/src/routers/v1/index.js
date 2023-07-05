const express = require('express');
const router = express.Router();

const TodoControllers = require('../../controllers/todo-controllers');

router.post('/todo', TodoControllers.create);
router.delete('/todo/:id', TodoControllers.destory);

module.exports = router;
