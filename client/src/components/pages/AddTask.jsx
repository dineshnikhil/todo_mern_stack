import React from 'react';
import { useContext } from 'react';

import './AddTask.css';
import TaskForm from '../taskForm/TaskForm';

import userContext from '../../store/userContext';

function AddTask() {
	const userCtx = useContext(userContext);

	function getTaskHandler(obj) {
		// console.log({ ...obj, userId: userCtx.userId });
		fetch('http://localhost:3000/api/v1/todo', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify({ ...obj, userId: userCtx.userId }),
		})
			.then((response) => response.json())
			.then((resData) => {
				console.log(resData);
			});
	}

	return (
		<React.Fragment>
			<TaskForm onSubmitHanlder={getTaskHandler} />
		</React.Fragment>
	);
}

export default AddTask;
