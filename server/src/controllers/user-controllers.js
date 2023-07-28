const { UserServices } = require('../services/index');

const userServices = new UserServices();

const create = async (req, res) => {
	try {
		const user = await userServices.createUser({
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
		});
		return res.status(201).json({
			todo: user,
			success: true,
			message: 'Successfully created the user..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to create the user..!',
			error: error,
		});
	}
};

const login = async (req, res) => {
	try {
		const response = await userServices.loginUser({
			username: req.body.username,
			password: req.body.password,
		});
		return res.status(200).json({
			user: response,
			success: true,
			message: 'Successfully fetched the user..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todo: {},
			success: false,
			message: 'Unable to login the user..!',
			error: error,
		});
	}
};

const getUserTodos = async (req, res) => {
	try {
		const todos = await userServices.getUserTodos(req.params.id);
		return res.status(200).json({
			todos: todos,
			success: true,
			message: 'Successfully fetched the todos of the user..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todos: [],
			success: false,
			message: 'Unable to fetch the todos of the user..!',
			error: error,
		});
	}
};

const findUser = async (req, res) => {
	try {
		const data = await userServices.getUser(req.params.username);
		return res.status(200).json({
			data: data,
			success: true,
			message: 'user was found..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			todos: [],
			success: false,
			message: 'Unable to fetch the todos of the user..!',
			error: error,
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const response = await userServices.deleteuser(req.params.id);
		return res.status(200).json({
			response: response,
			success: true,
			message: 'Successfully deleted the user..!',
			error: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			response: null,
			success: false,
			message: 'Unable to delete the user..!!',
			error: error,
		});
	}
};

module.exports = {
	create,
	login,
	getUserTodos,
	findUser,
	deleteUser,
};
