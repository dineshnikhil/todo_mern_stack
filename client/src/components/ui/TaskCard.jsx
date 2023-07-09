import React from 'react';
import { Button } from '@mui/material';

import './TaskCard.css';

function TaskCard({ task, onDeleteTask }) {
	function deleteTask() {
		onDeleteTask(task.id);
	}

	return (
		<div className="taskCard">
			<h1>{task.title}</h1>
			<h3>{task.description}</h3>
			<div>
				<Button
					variant="contained"
					style={{
						marginRight: '2%',
					}}
				>
					Done
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
