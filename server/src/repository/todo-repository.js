const { Todo, User } = require('../models/index');

class TodoRepository {
	async createTodo({ title, description, userId, priority }) {
		try {
			const todo = await Todo.create({ title, description, userId, priority });
			const todoInstance = await Todo.findByPk(todo.id);
			const user = await User.findByPk(userId);
			todoInstance.addUser(user);
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

	async updataTodo(updatedTodo, todoId) {
		try {
			const todo = await Todo.update(updatedTodo, {
				where: {
					id: todoId,
				},
			});
			return todo;
		} catch (error) {
			console.log('Something went worng in the repository layer..!');
			throw { error };
		}
	}

	async getThisTodoUser(todoId) {
		const todo = await Todo.findByPk(todoId);
		const users = await todo.getUsers();
		const updatedUsersArray = [];
		users.forEach((user) => {
			updatedUsersArray.push(user.username);
		});

		return updatedUsersArray;
	}
}

module.exports = TodoRepository;
