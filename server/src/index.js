const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./configs/serverConfig');

const create_and_run_server = () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.listen(PORT, () => {
		console.log('Server is running at port: ', PORT);
	});
};

create_and_run_server();
