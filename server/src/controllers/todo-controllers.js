const { TodoServices } = require('../services/index');
// Create the todoServices object from the TodoServices class imported.
const todoServices = new TodoServices();

/**
 * POST -> /todo
 * Creates the new todo task.
 */
const create = async (req, res) => {
	try {
		const todo = await todoServices.createTodo(req.body);
		// console.log(todo);
		return res.status(201).json({
			todo: todo,
			success: true,
			message: 'Successfully created the todo task..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to create the todo task..!',
			error: error,
		});
	}
};

/**
 * DELETE -> /todo/:id
 * Deleting the todo task based on the given task id.
 */
const destory = async (req, res) => {
	try {
		const response = await todoServices.deleteTodo(req.params.id);
		return res.status(200).json({
			todo: response,
			success: true,
			message: 'Successfully deleted the todo task..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to delete the todo task..!',
			error: error,
		});
	}
};

/**
 * GET -> /todo
 * Fetch all the todo tasks available in the database.
 */
const getAll = async (req, res) => {
	try {
		const todos = await todoServices.getTodos();
		return res.status(200).json({
			todo: todos,
			success: true,
			message: 'Successfully fetched the todo tasks..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to fetch the todo tasks..!',
			error: error,
		});
	}
};

/**
 * PATCH -> /todo/:id
 * Update the todo task with the given data in the body and id given in the params.
 */
const update = async (req, res) => {
	try {
		const todo = await todoServices.updateTodo(req.body, req.params.id);
		return res.status(200).json({
			todo: todo,
			success: true,
			message: 'Successfully updated the todo task..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to update the todo task..!',
			error: error,
		});
	}
};

/**
 * POST -> /todo/user/?todoId=''&userId=''
 */
const addUser = async (req, res) => {
	try {
		const response = await todoServices.addUserToTodo(
			req.query.todoId,
			req.query.userId
		);
		return res.status(200).json({
			response: response,
			success: true,
			message: 'Successfully added the user to the todo..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to add user to the todo task..!',
			error: error,
		});
	}
};

/**
 * DELETE -> /todo/user/?todoId=''&userId=''
 */
const removeUser = async (req, res) => {
	try {
		const response = await todoServices.removeUserToTodo(
			req.query.todoId,
			req.query.userId
		);
		return res.status(200).json({
			response: response,
			success: true,
			message: 'Successfully removed the user from the todo..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to remove user from the todo task..!',
			error: error,
		});
	}
};

module.exports = {
	create,
	destory,
	getAll,
	update,
	addUser,
	removeUser,
};
