const express = require('express');
const router = express.Router();

const TodoControllers = require('../../controllers/todo-controllers');
const UserControllers = require('../../controllers/user-controllers');

router.post('/todo', TodoControllers.create);
router.delete('/todo/:id', TodoControllers.destory);
router.get('/todo', TodoControllers.getAll);
router.patch('/todo/:id', TodoControllers.update);

router.post('/signup', UserControllers.create);
router.post('/login', UserControllers.login);

module.exports = router;
