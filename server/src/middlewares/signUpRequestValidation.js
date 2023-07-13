const signUpRequestValidation = (req, res, next) => {
	if (!req.body.username || !req.body.email || !req.body.password) {
		return res.status(400).json({
			data: {},
			success: false,
			message: 'Unable to signUp..!',
			error: 'Some required property is missing in the request body.!',
		});
	}
	next();
};

module.exports = signUpRequestValidation;
