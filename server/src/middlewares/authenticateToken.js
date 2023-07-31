const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

const authenticateToken = async (req, res, next) => {
	if (req.headers.authorization) {
		jwt.verify(req.headers.authorization, JWT_KEY, (err, user) => {
			if (err) {
				return res.status(401).json({
					data: {},
					success: false,
					message: 'Invalid Token..!',
					error: 'Bad request with invalid token.',
				});
			}
			next();
		});
	} else {
		return res.status(400).json({
			data: {},
			success: false,
			message: 'There is no token given by the client.',
			error: 'Bad request without token.',
		});
	}
};

module.exports = authenticateToken;
