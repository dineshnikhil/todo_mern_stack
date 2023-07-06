const { Todo } = require('../models/index');

class TodoRepository {
	async createTodo({ title, description }) {
		try {
			const todo = await Todo.create({ title, description });
			return todo;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}

	async deleteTodo(todoId) {
		try {
			const response = await Todo.destroy({
				where: {
					id: todoId,
				},
			});
			return response;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}

	async getTodos() {
		try {
			const todos = await Todo.findAll();
			return todos;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}
}

module.exports = TodoRepository;
