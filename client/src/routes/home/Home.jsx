import React from 'react';

import './Home.css';
import AddTask from '../../components/pages/AddTask';
import Tasks from '../../components/tasks/Tasks';

function Home() {
	return (
		<div className="homeDiv">
			<AddTask />
			<Tasks />
		</div>
	);
}

export default Home;
