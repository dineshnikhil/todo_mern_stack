const { Todo } = require('../models/index');

class TodoRepository {
	async createTodo({ name, description }) {
		try {
			const todo = await Todo.create({ name, description });
			return todo;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}
}

module.exports = TodoRepository;
