const { TodoRepository } = require('../repository/index');

class TodoServices {
	constructor() {
		this.todoRepository = new TodoRepository();
	}

	async createTodo({ title, description }) {
		try {
			const todo = await this.todoRepository.createTodo({ title, description });
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
}

module.exports = TodoServices;
