const { UserRepository, TodoRepository } = require('../repository/index');
const bcrypt = require('bcrypt');

class UserServices {
	constructor() {
		this.userRepository = new UserRepository();
		this.todoRepository = new TodoRepository();
	}

	// this will create the new user
	async createUser(data) {
		try {
			const user = await this.userRepository.createUser(data);
			return user;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	// this will login the user with appropriate cradentional
	async loginUser({ username, password }) {
		try {
			const data = await this.userRepository.getUser(username);
			console.log(data.data.password);
			const response = bcrypt.compareSync(password, data.data.password);
			if (!response) {
				return {
					loginStatus: response,
					userId: -1,
					todos: [],
				};
			}
			const todos = await this.userRepository.getUserTodos(data.data.id);
			const updatedTodos = await this.updateTodos(todos);
			return {
				loginStatus: response,
				userId: data.data.id,
				todos: updatedTodos,
			};
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	// this will delete the user
	async deleteuser(userId) {
		try {
			const reponse = await this.userRepository.deleteUser(userId);
			return reponse;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	// this will update the user details
	// ryt now i am not using any ware
	async updateUser(userId, userData) {
		try {
			const user = await this.userRepository.updateUser(userId, userData);
			return user;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	// this will get all the todos assigned to the user
	async getUserTodos(userId) {
		try {
			const todos = await this.userRepository.getUserTodos(userId);
			const updatedTodos = await this.updateTodos(todos);
			return updatedTodos;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	// this function update the todo object before pushing to the client
	// this will ass the users attribute array which show all the user assigned to invidual task of the user
	async updateTodos(todos) {
		// this function will add the all the associated users to the perticular task.
		const updatedTodosArray = [];
		const promises = todos.map(async (todo) => {
			const usersOfTodo = await this.todoRepository.getThisTodoUsers(todo.id);
			updatedTodosArray.push({ ...todo.dataValues, users: usersOfTodo });
		});

		await Promise.all(promises); // Wait for all async operations to complete
		return updatedTodosArray;
	}

	// this function will return me weather the user persent or not
	// -> we take username and verifiy that
	// -> if user found we provide username and userId
	// -> if user not found we send same message like your not found
	async getUser(username) {
		try {
			const response = await this.userRepository.getUser(username);
			return {
				...response,
				data: {
					username: response.data.username,
					userId: response.data.id,
				},
			};
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}
}

module.exports = UserServices;
