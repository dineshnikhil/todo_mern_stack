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

module.exports = {
	create,
	destory,
	getAll,
};
