const { TodoServices } = require('../services/index');
const todoServices = new TodoServices();

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

module.exports = {
	create,
};
