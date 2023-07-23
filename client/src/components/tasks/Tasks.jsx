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

	function doneTask() {}

	return (
		<div className="tasksDiv">
			{userCtx.todos.length ? (
				userCtx.todos.map((task) => {
					return (
						<TaskCard
							key={task.id}
							task={task}
							onDeleteTask={deleteTask}
							onDoneTask={doneTask}
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
