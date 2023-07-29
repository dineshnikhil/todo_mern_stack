import React, { useContext } from 'react';

import { Button, Card } from '@mui/material';
import TextField from '@mui/material/TextField';

import userContext from '../../store/userContext';

function UserDetails() {
	const userCtx = useContext(userContext);
	const feildStyling = {
		width: '80%',
		marginRight: '2%',
		fontSize: '1.2rem',
		backgroundColor: '#252422',
	};
	return (
		<Card
			sx={{
				backgroundColor: '#32312E',
				padding: '2% 12%',
				boxShadow: 5,
				borderRadius: '1rem',
			}}
		>
			<h1>User Details</h1>
			<div
				style={{
					margin: '2%',
				}}
			>
				<div
					style={{
						display: 'flex',
					}}
				>
					<TextField
						sx={feildStyling}
						label="Username"
						variant="filled"
						value={userCtx.username}
						InputLabelProps={{
							style: {
								color: '#EB5E28', // Set the color of the label text to any desired color
							},
						}}
					/>
					<Button variant="contained">Edit Username</Button>
				</div>
				<div>
					<p>
						pending todos:{' '}
						{userCtx.todos.filter((task) => !task.completed).length}
					</p>
					<p>
						complete todos:{' '}
						{userCtx.todos.filter((task) => task.completed).length}
					</p>
					<p>total todos: {userCtx.todos.length}</p>
				</div>
			</div>
		</Card>
	);
}

export default UserDetails;
