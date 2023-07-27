import React from 'react';
import { useState } from 'react';

import { Button } from '@mui/material';
import { Card } from '@mui/material';

import dateFormater from '../../utils/dateFormater';
import daysLeftToFinishTask from '../../utils/remainingDays';

import './TaskCard.css';
import TaskEditModal from './popups/TaskEditModal';
import ComformationModal from './popups/ComformationModal';
import AddUserToTask from './popups/AddUserToTask';
import TaskUserBlock from './TaskUserBlock';

function TaskCard({ task, onDeleteTask, onCompleteTaskToggle }) {
	const [open, setOpen] = useState(false);
	const [openUndo, setOpenUndo] = useState(false);
	const [openAddUser, setOpenAddUser] = useState(false);

	const todayDate = new Date();

	// ============= handlers of the delete popup ======================
	function deleteTask() {
		onDeleteTask(task.id);
	}

	function openUndoModle() {
		setOpenUndo(true);
	}

	function closeUndo() {
		setOpenUndo(false);
	}
	// ==================================================================

	// ============= handlers of the edit popup =========================
	function onCloseHandler() {
		setOpen(false);
	}

	function onOpenHandler() {
		setOpen(true);
	}
	// ==================================================================

	function completeTaskToggle() {
		onCompleteTaskToggle(task);
	}

	// ============== handlers of the add user to task ==================
	function openAddUserToTask() {
		setOpenAddUser(true);
	}

	function closeAddUserToTask() {
		setOpenAddUser(false);
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
					action={deleteTask}
				/>
			)}
			{openAddUser && (
				<AddUserToTask
					open={openAddUser}
					onClose={closeAddUserToTask}
					taskId={task.id}
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
				<div className="timeDiv">
					<p>🕛 Created at : {dateFormater(task.createdAt)}</p>
					<p>
						Days left :{' '}
						{task.dueDate
							? daysLeftToFinishTask(todayDate, task.dueDate)
							: 'nope!'}
					</p>
					<p>Due Date : {task.dueDate ? dateFormater(task.dueDate) : '---'}</p>
				</div>
				<div className="titleDiv">
					<h2>➡️ {task.title}</h2>
					<h3>{task.priority}</h3>
				</div>
				<div className="todoUsersDiv">
					<div>
						<h3>Users</h3>
						<Button onClick={openAddUserToTask}>Add User</Button>
					</div>
					{task.users.map((user) => {
						return <TaskUserBlock user={user} taskId={task.id} />;
					})}
				</div>
				<h3>{task.description}</h3>
				<p>{task.completed ? '✅ Completed.!' : '⌛ pending.!'}</p>

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
