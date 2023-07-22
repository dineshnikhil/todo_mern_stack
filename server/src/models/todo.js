'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Todo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsToMany(models.User, {
				through: 'TodoUser',
			});
		}
	}
	Todo.init(
		{
			title: { type: DataTypes.STRING },
			description: { type: DataTypes.STRING },
			completed: { type: DataTypes.BOOLEAN, defaultValue: false },
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			priority: {
				type: DataTypes.ENUM('Low', 'Medium', 'High', 'Urgent', 'Critical'),
				allowNull: false,
				defaultValue: 'Low',
			},
			dueDate: {
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: 'Todo',
		}
	);
	return Todo;
};
