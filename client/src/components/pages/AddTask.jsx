import React from 'react';
import { useRef, useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './AddTask.css';
import TaskCard from '../ui/TaskCard';

function AddTask() {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const title = useRef('');
	const description = useRef('');

	function fetchTodos() {
		fetch('http://localhost:3000/api/v1/todo')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTasks(data.todo);
				setIsLoading(false);
			});
	}

	useEffect(() => {
		fetchTodos();
	}, []);

	function formHandler(event) {
		event.preventDefault();

		const data = {
			title: title.current.value,
			description: description.current.value,
		};

		fetch('http://localhost:3000/api/v1/todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((responseData) => {
				// Handle the response data
				console.log(responseData);
				title.current.value = '';
				description.current.value = '';
				fetchTodos();
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	}

	function deleteTaskHandler(id) {
		const url = `http://localhost:3000/api/v1/todo/${id}`;
		fetch(url, {
			method: 'DELETE',
		})
			.then((response) => {
				if (response.ok) {
					// Handle success
					fetchTodos();
					console.log('Delete request successful');
				} else {
					// Handle error
					throw new Error('Delete request failed');
				}
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	}

	function doneTaskHandler(task) {
		const url = `http://localhost:3000/api/v1/todo/${task.id}`;
		const updatedData = {
			completed: !task.completed,
		};
		fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedData),
		})
			.then((response) => response.json())
			.then((responseData) => {
				// Handle the response data
				fetchTodos();
				console.log(responseData);
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	}

	return (
		<React.Fragment>
			<div className="formDiv">
				<Box m="auto">
					<Card
						style={{
							padding: '5%',
							width: '50%',
						}}
					>
						<form onSubmit={formHandler}>
							{/* <input type="text" lable="titile" ref={title} /> */}
							<TextField
								id="title"
								label="titile"
								variant="standard"
								ref={title}
							/>
							<br />
							<input type="text" lable="description" ref={description} />
							<br />
							<button type="submit">submit</button>
						</form>
					</Card>
				</Box>
			</div>
			<div className="tasksDiv">
				{isLoading ? (
					<h1>something happen!</h1>
				) : (
					tasks.map((task) => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								onDeleteTask={deleteTaskHandler}
								onDoneTask={doneTaskHandler}
							/>
						);
					})
				)}
			</div>
		</React.Fragment>
	);
}

export default AddTask;
