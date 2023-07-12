'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		return Promise.all([
			await queryInterface.addColumn('Todos', 'userId', {
				type: Sequelize.INTEGER,
				allowNull: false,
			}),
			await queryInterface.addColumn('Todos', 'priority', {
				type: Sequelize.ENUM('Low', 'Medium', 'High', 'Urgent', 'Critical'),
				allowNull: false,
				defaultValue: 'Low',
			}),
			await queryInterface.addColumn('Todos', 'dueDate', {
				type: Sequelize.DATE,
			}),
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */

		return Promise.all([
			await queryInterface.removeColumn('Todos', 'userId'),
			await queryInterface.removeColumn('Todos', 'priority'),
			await queryInterface.removeColumn('Todos', 'dueDate'),
		]);
	},
};
