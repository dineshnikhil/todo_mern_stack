const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routers/index');

const create_and_run_server = () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(cors());

	app.use('/api', ApiRoutes);

	app.listen(PORT, () => {
		console.log('Server is running at port: ', PORT);
	});
};

create_and_run_server();
