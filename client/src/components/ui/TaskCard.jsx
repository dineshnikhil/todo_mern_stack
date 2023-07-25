import React from 'react';
import { useState, useEffect } from 'react';

import { Button } from '@mui/material';
import { Card } from '@mui/material';
import Fab from '@mui/material/Fab';

import './TaskCard.css';
import TaskEditModal from './popups/TaskEditModal';
import UndoSnakbar from './snakbars/UndoSnakbar';

function TaskCard({ task, onDeleteTask, onCompleteTaskToggle }) {
	const [open, setOpen] = useState(false);
	const [openUndo, setOpenUndo] = useState(false);

	useEffect(() => {
		var timer;
		if (openUndo) {
			timer = setTimeout(() => {
				console.log('task delted..!');
				onDeleteTask(task.id);
				setOpenUndo(true);
			}, 3000);
		} else {
			console.log('task not deleted..!');
		}
		return () => clearTimeout(timer);
	}, [openUndo]);

	function onCloseHandler() {
		setOpen(false);
	}

	function onOpenHandler() {
		setOpen(true);
	}

	function deleteTask() {
		setOpenUndo(true);
		// onDeleteTask(task.id);
	}

	function closeUndo() {
		setOpenUndo(false);
	}

	function completeTaskToggle() {
		onCompleteTaskToggle(task);
	}

	return (
		<>
			{open && (
				<TaskEditModal
					task={task}
					open={open}
					onCloseHandler={onCloseHandler}
				/>
			)}
			{openUndo && <UndoSnakbar openUndo={openUndo} closeUndo={closeUndo} />}
			<Card
				sx={{
					backgroundColor: '#32312E',
					borderRadius: '1rem',
					width: '40%',
					padding: '2% 4%',
					margin: '1%',
					boxShadow: 5,
				}}
			>
				<div className="titleDiv">
					<h2>{task.title}</h2>
					<h3>{task.priority}</h3>
				</div>
				<div className="todoUsersDiv">
					<h3>Users</h3>
					{task.users.map((user) => {
						return (
							<Fab
								variant="extended"
								size="small" // You can change the size to 'small', 'medium', or 'large'
								sx={{
									fontSize: '.8rem',
									padding: '2%',
									marginRight: '1%',
									borderRadius: '.5rem',
									backgroundColor: '#252422',
									color: '#ffffff',
									'&:hover': {
										backgroundColor: '#1b1b1a', // Set the background color on hover
										// You can add more styles here for hover effect as needed
									},
								}}
							>
								{user}
							</Fab>
						);
					})}
				</div>
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
			</Card>
		</>
	);
}

export default TaskCard;
