const { UserRepository, TodoRepository } = require('../repository/index');
const bcrypt = require('bcrypt');

class UserServices {
	constructor() {
		this.userRepository = new UserRepository();
		this.todoRepository = new TodoRepository();
	}

	/**
	 * This function will create the new user with username, email and password
	 * STEP1 => it simplet create the user from repository layer.
	 */
	async createUser(data) {
		try {
			const user = await this.userRepository.createUser(data);
			return user;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	/**
	 * This function will login the user with username and password
	 * STEP1 => use the getUser method to get user data
	 * STEP2 => then compare the user data password and user client provided password
	 * STEP3 => then after successfull password verification, we get the all the todos of the respective user
	 * STEP4 => in between we add the extra users attribute to the data before sending the clint
	 */
	async loginUser({ username, password }) {
		try {
			const data = await this.userRepository.getUser(username);
			const response = bcrypt.compareSync(password, data.data.password);
			if (!response) {
				return {
					loginStatus: response,
					userId: -1,
					todos: [],
				};
			}
			const todos = await this.getUserTodos(data.data.id);
			return {
				loginStatus: response,
				userId: data.data.id,
				todos: todos,
			};
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	/**
	 * This function will DELETE the user account taking userId from the client.
	 * STEP1 => it simplet DELETE the user from repository layer.
	 */
	async deleteuser(userId) {
		try {
			const reponse = await this.userRepository.deleteUser(userId);
			return reponse;
		} catch (error) {
			console.log('Something went worng in the service layer..!');
			throw { error };
		}
	}

	/**
	 * This will UPDATE the user data provided userId and userData from the client.
	 * STEP1 => it simply passed the userId which user to update and userData what to update. from the repository layer.
	 */
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
	/**
	 * This function gives all the todo of the user provided userId from the client.
	 * STEP1 => get all the todos of user using the userId.
	 * STEP2 => update the resulted todso with extra attribute called users
	 * STEP3 => then return the updated todos with user attribute.
	 */
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

	/**
	 * HELPER FUNCTION
	 * This function will updates the todos data fetch by the user
	 * STEP1 => create the empty array called updatedTodosArray
	 * STEP2 => create a promise where map through the every todo and add the usersOfTodo array
	 * STEP2.1 => create the usersOfTodo array witht the getThisTodoUsers providing the todoId
	 * STEP2.2 => now push whole todo data with updated user attribut with the usersOfTodo
	 * STEP3 => clear all the promise
	 * STEP4 => return the updatedTodoArray.
	 */
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

	/**
	 * This function will return me weather the user persent or not
	 * STEP1 => we take username and verifiy that
	 * STEP2 => if user found we filtering out the only username and userId
	 * STEP3 => if user not found we send same message like your not found
	 */
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
