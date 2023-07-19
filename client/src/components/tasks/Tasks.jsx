import React from 'react';

import { useState, useEffect } from 'react';
import './Tasks.css';
import TaskCard from '../ui/TaskCard';

function Tasks() {
	const [todos, setTodos] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	function getTodos() {
		fetch('http://localhost:3000/api/v1/todo')
			.then((response) => {
				return response.json();
			})
			.then((resData) => {
				setTodos(resData.todo);
				setIsLoaded(true);
			});
	}

	useEffect(() => {
		getTodos();
	}, []);

	function deleteTask() {}

	function doneTask() {}

	return (
		<div className="tasksDiv">
			{isLoaded ? (
				todos.map((task) => {
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
				<h1>loading...</h1>
			)}
		</div>
	);
}

export default Tasks;
