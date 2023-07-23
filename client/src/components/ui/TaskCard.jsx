import React from 'react';
import { Button } from '@mui/material';

import './TaskCard.css';

function TaskCard({ task, onDeleteTask, onCompleteTaskToggle }) {
	function deleteTask() {
		onDeleteTask(task.id);
	}

	function completeTaskToggle() {
		onCompleteTaskToggle(task);
	}

	return (
		<div className="taskCard">
			<h1>{task.title}</h1>
			<h3>{task.description}</h3>
			<p>Status - {task.completed ? 'Completed.!' : 'pending.!'}</p>
			<div>
				<Button
					onClick={completeTaskToggle}
					variant="contained"
					style={{
						marginRight: '2%',
					}}
				>
					{task.completed ? 'Not Done' : 'Done'}
				</Button>
				<Button
					onClick={deleteTask}
					variant="contained"
					style={{
						marginRight: '2%',
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	);
}

export default TaskCard;
