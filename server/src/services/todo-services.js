const { TodoRepository } = require('../repository/index');

class TodoServices {
	constructor() {
		this.todoRepository = new TodoRepository();
	}

	async createTodo({ title, description, userId, priority }) {
		try {
			const todo = await this.todoRepository.createTodo({
				title,
				description,
				userId,
				priority,
			});
			return todo;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			throw { error };
		}
	}

	async deleteTodo(todoId) {
		try {
			const response = await this.todoRepository.deleteTodo(todoId);
			return response;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			throw { error };
		}
	}

	async getTodos() {
		try {
			const todos = await this.todoRepository.getTodos();
			return todos;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			throw { error };
		}
	}

	async updateTodo(updatedTodo, todoId) {
		try {
			const todo = await this.todoRepository.updataTodo(updatedTodo, todoId);
			return todo;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			throw { error };
		}
	}

	async addUserToTodo(todoId, userId) {
		try {
			const response = await this.todoRepository.addUserToTodo(todoId, userId);
			return response;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			throw { error };
		}
	}
}

module.exports = TodoServices;
