const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routers/index');

const { User, Todo } = require('./models/index');
const db = require('./models/index');

const create_and_run_server = () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(cors());

	app.use('/api', ApiRoutes);

	app.listen(PORT, async () => {
		console.log('Server is running at port: ', PORT);

		// const t1 = await Todo.findByPk(39);
		// const u1 = await User.findByPk(21);

		// t1.addUser(u1);

		// if (true) {
		// 	db.sequelize.sync({ alert: true });
		// }
	});
};

create_and_run_server();
