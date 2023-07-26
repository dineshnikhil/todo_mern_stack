const { User } = require('../models/index');

class UserRepository {
	async createUser(data) {
		try {
			const user = await User.create(data);
			return user;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			if (error.name == 'SequelizeUniqueConstraintError') {
				throw { error: error.errors[0].message };
			}
			throw { error };
		}
	}

	async getUser(username) {
		try {
			const user = await User.findOne({
				where: {
					username: username,
				},
			});
			if (!user) {
				return {
					userFound: false,
					data: {},
				};
			}
			return {
				userFound: true,
				data: user,
			};
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}

	async deleteUser(userId) {
		try {
			await User.destroy({
				where: {
					id: userId,
				},
			});
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}

	async updateUser(userId, userData) {
		try {
			const user = await User.update(userData, {
				where: {
					id: userId,
				},
			});
			return user;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}

	async getUserTodos(id) {
		try {
			const user = await User.findByPk(id);
			const todos = await user.getTodos();
			return todos;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}
}

module.exports = UserRepository;
