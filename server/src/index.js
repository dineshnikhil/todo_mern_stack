const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const create_and_run_server = () => {
	const app = express();
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.listen(process.env.PORT, () => {
		console.log('Server is running at port: ', process.env.PORT);
	});
};

create_and_run_server();
