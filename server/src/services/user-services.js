const { UserRepository } = require('../repository/index');

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

	async deleteuser(userId) {
		try {
			const reponse = await this.userRepository.deleteUser(userId);
			return reponse;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	async createUser(userId, userData) {
		try {
			const user = await this.userRepository.updateUser(userId, userData);
			return user;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}
}

module.exports = UserServices;
