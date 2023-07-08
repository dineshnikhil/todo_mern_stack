import React from 'react';

import './TaskCard.css';

function TaskCard({ task }) {
	return (
		<div className="taskCard">
			<h1>{task.title}</h1>
			<h3>{task.description}</h3>
			<div>
				<button>Done</button>
				<button>delete</button>
			</div>
		</div>
	);
}

export default TaskCard;
