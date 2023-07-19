import React from 'react';

import './Home.css';
import TaskForm from '../../components/taskForm/TaskForm';

function Home() {
	return (
		<div className="homeDiv">
			<TaskForm />
		</div>
	);
}

export default Home;
