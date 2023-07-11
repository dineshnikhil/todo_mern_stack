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
			login: response,
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

module.exports = {
	create,
	login,
};
