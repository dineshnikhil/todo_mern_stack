import React from 'react';
import { useRef, useEffect, useState } from 'react';

import './AddTask.css';
import TaskCard from '../ui/TaskCard';

function AddTask() {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const title = useRef('');
	const description = useRef('');

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/todo')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTasks(data.todo);
				setIsLoading(false);
			});
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
				fetch('http://localhost:3000/api/v1/todo')
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						setTasks(data.todo);
						setIsLoading(false);
					});
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	}

	return (
		<React.Fragment>
			<div className="formDiv">
				<form onSubmit={formHandler}>
					<input type="text" lable="titile" ref={title} />
					<input type="text" lable="description" ref={description} />
					<button type="submit">submit</button>
				</form>
			</div>
			<div>
				{isLoading ? (
					<h1>something happen!</h1>
				) : (
					tasks.map((task) => {
						return <TaskCard key={task.id} task={task} />;
					})
				)}
			</div>
		</React.Fragment>
	);
}

export default AddTask;
