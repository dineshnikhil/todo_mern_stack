const { UserRepository } = require('../repository/index');
const bcrypt = require('bcrypt');

class UserServices {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async createUser(data) {
		try {
			const user = await this.userRepository.createUser(data);
			return user;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	async loginUser({ username, password }) {
		try {
			const user = await this.userRepository.getUser(username);
			const response = bcrypt.compareSync(password, user.password);
			if (!response) {
				return {
					loginStatus: response,
					userId: -1,
					todos: [],
				};
			}
			const todos = await this.userRepository.getUserTodos(user.id);
			return {
				loginStatus: response,
				userId: user.id,
				todos: todos,
			};
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	async deleteuser(userId) {
		try {
			const reponse = await this.userRepository.deleteUser(userId);
			return reponse;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	async updateUser(userId, userData) {
		try {
			const user = await this.userRepository.updateUser(userId, userData);
			return user;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	async getUserTodos(userId) {
		try {
			const todos = await this.userRepository.getUserTodos(userId);
			return todos;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}
}

module.exports = UserServices;
