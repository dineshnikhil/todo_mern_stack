import React from 'react';
import { useRef, useEffect, useState } from 'react';

import './AddTask.css';

function AddTask() {
	const [tasks, setTasks] = useState([]);
	const title = useRef('');
	const description = useRef('');

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/todo')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTasks(data.todo);
			});
	}, []);

	function formHandler(event) {
		event.preventDefault();

		const data = {
			title: title.current.value,
			description: description.current.value,
		};

		console.log(data);
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
				{tasks.map((task) => {
					return <h3 key={task.id}>{task.title}</h3>;
				})}
			</div>
		</React.Fragment>
	);
}

export default AddTask;
