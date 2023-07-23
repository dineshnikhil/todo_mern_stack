import React from 'react';
import { useContext } from 'react';

import './Tasks.css';
import TaskCard from '../ui/TaskCard';

import userContext from '../../store/userContext';

function Tasks() {
	const userCtx = useContext(userContext);

	function deleteTask(taskId) {
		fetch(`http://localhost:3000/api/v1/todo/${taskId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((resData) => {
				userCtx.updateUserTodos(userCtx.userId);
			});
	}

	function completeTaskToggle(task) {
		const dataToUpdate = {
			completed: !task.completed,
		};

		fetch(`http://localhost:3000/api/v1/todo/${task.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToUpdate),
		})
			.then((response) => response.json())
			.then((resData) => {
				userCtx.updateUserTodos(userCtx.userId);
			});
	}

	return (
		<div className="tasksDiv">
			{userCtx.todos.length ? (
				userCtx.todos.map((task) => {
					return (
						<TaskCard
							key={task.id}
							task={task}
							onDeleteTask={deleteTask}
							onCompleteTaskToggle={completeTaskToggle}
						/>
					);
				})
			) : (
				<h1>no tasks there..!</h1>
			)}
		</div>
	);
}

export default Tasks;
