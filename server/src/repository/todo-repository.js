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
}

module.exports = TodoRepository;
