import React from 'react';
import { useContext } from 'react';

import Fab from '@mui/material/Fab';

import userContext from '../../store/userContext';

function TaskUserBlock({ user, taskId }) {
	const userCtx = useContext(userContext);

	function removeUser() {
		console.log(user, taskId);
		fetch(`http://localhost:3000/api/v1/user/${user}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.data.data.userId);
				fetch(
					`http://localhost:3000/api/v1/todo/user/?todoId=${taskId}&userId=${data.data.data.userId}`,
					{
						method: 'PATCH',
						headers: {
							'content-Type': 'application/json',
						},
					}
				)
					.then((response) => response.json())
					.then((data) => {
						if (data.success) {
							userCtx.updateUserTodos(userCtx.userId);
						}
					});
			});
	}

	return (
		<Fab
			variant="extended"
			size="small" // You can change the size to 'small', 'medium', or 'large'
			sx={{
				fontSize: '.8rem',
				padding: '2%',
				marginRight: '1%',
				borderRadius: '.5rem',
				backgroundColor: '#252422',
				color: '#ffffff',
				'&:hover': {
					backgroundColor: '#1b1b1a',
				},
			}}
		>
			{user}
			<button onClick={removeUser}>X</button>
		</Fab>
	);
}

export default TaskUserBlock;
