import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

import './TaskCard.css';
import TaskEditModal from './popups/TaskEditModal';

function TaskCard({ task, onDeleteTask, onCompleteTaskToggle }) {
	const [open, setOpen] = useState(false);

	function onCloseHandler() {
		setOpen(false);
	}

	function onOpenHandler() {
		setOpen(true);
	}

	function deleteTask() {
		onDeleteTask(task.id);
	}

	function completeTaskToggle() {
		onCompleteTaskToggle(task);
	}

	return (
		<>
			{open && <TaskEditModal open={open} onCloseHandler={onCloseHandler} />}
			<div className="taskCard">
				<h1>{task.title}</h1>
				<h3>{task.description}</h3>
				<p>Status - {task.completed ? 'Completed.!' : 'pending.!'}</p>
				<div className="actionsDiv">
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
					<div>
						<Button
							onClick={onOpenHandler}
							variant="contained"
							style={{
								marginRight: '2%',
							}}
						>
							Edit
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default TaskCard;
