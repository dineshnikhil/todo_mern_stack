const express = require('express');
const router = express.Router();

const TodoControllers = require('../../controllers/todo-controllers');
const UserControllers = require('../../controllers/user-controllers');

const signUpRequestValidation = require('../../middlewares/signUpRequestValidation');

router.post('/todo', TodoControllers.create);
router.delete('/todo/:id', TodoControllers.destory);
router.get('/todo', TodoControllers.getAll);
router.patch('/todo/:id', TodoControllers.update);

router.post('/signup', signUpRequestValidation, UserControllers.create);
router.post('/login', UserControllers.login);

module.exports = router;
