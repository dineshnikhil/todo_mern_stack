import React from 'react';

import './AddTask.css';
import TaskForm from '../taskForm/TaskForm';

function AddTask() {
	function getTaskHandler(obj) {
		console.log(obj);
	}

	return (
		<React.Fragment>
			<TaskForm onSubmitHanlder={getTaskHandler} />
		</React.Fragment>
	);
}

export default AddTask;
