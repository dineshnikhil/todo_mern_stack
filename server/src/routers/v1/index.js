const express = require('express');
const router = express.Router();

const TodoControllers = require('../../controllers/todo-controllers');
const UserControllers = require('../../controllers/user-controllers');

const signUpRequestValidation = require('../../middlewares/signUpRequestValidation');

router.patch('/todo/user', TodoControllers.removeUser);

router.post('/todo', TodoControllers.create);
router.delete('/todo/:id', TodoControllers.destory);
router.get('/todo', TodoControllers.getAll);
router.patch('/todo/:id', TodoControllers.update);

router.get('/user/:username', UserControllers.findUser);
router.delete('/user/:id', UserControllers.deleteUser);

router.post('/signup', signUpRequestValidation, UserControllers.create);
router.post('/signin', UserControllers.login);

router.get('/todo/user/:id', UserControllers.getUserTodos);
router.post('/todo/user', TodoControllers.addUser);

module.exports = router;
