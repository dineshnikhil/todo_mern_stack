import React from 'react';
import { useState, useEffect } from 'react';

import { Button } from '@mui/material';
import { Card } from '@mui/material';
import Fab from '@mui/material/Fab';

import './TaskCard.css';
import TaskEditModal from './popups/TaskEditModal';
import UndoSnakbar from './snakbars/UndoSnakbar';
import ComformationModal from './popups/ComformationModal';

function TaskCard({ task, onDeleteTask, onCompleteTaskToggle }) {
	const [open, setOpen] = useState(false);
	const [openUndo, setOpenUndo] = useState(false);

	function deleteTask() {
		onDeleteTask(task.id);
	}

	function openUndoModle() {
		setOpenUndo(true);
	}

	function closeUndo() {
		setOpenUndo(false);
	}

	function onCloseHandler() {
		setOpen(false);
	}

	function onOpenHandler() {
		setOpen(true);
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
			{/* {openUndo && <UndoSnakbar openUndo={openUndo} closeUndo={closeUndo} />} */}
			{openUndo && (
				<ComformationModal
					title="Delete Task"
					content="Once deleted, you will not be able to recover this task."
					openUndo={openUndo}
					closeUndo={closeUndo}
					deleteTask={deleteTask}
				/>
			)}
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
										backgroundColor: '#1b1b1a',
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
							onClick={openUndoModle}
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
