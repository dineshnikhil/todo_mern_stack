'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert('Users', [
			{
				username: 'dinesh',
				password: 'dinesh',
				email: 'dinesh@gmail.com',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'akhil',
				password: 'akhil',
				email: 'akhil@gmail.com',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: 'babu',
				password: 'babu',
				email: 'babu@gmail.com',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
