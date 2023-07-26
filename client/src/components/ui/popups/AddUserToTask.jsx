import React from 'react';
import { useState, useRef } from 'react';
import { useContext } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';

import userContext from '../../../store/userContext';

function AddUserToTask({ open, onClose, taskId }) {
	const userCtx = useContext(userContext);

	const username = useRef();
	const [user, setUser] = useState({});
	const [userFound, setUserFound] = useState(false);
	const [message, setMessage] = useState(
		'Find the user status will apper here'
	);

	const feildStyling = {
		margin: '2%',
		fontSize: '1.2rem',
		backgroundColor: '#252422',
	};

	function findUserHandler() {
		setUserFound(false);
		setMessage('Searching the user...');
		fetch(`http://localhost:3000/api/v1/user/${username.current.value}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.data.userFound) {
					setMessage('user found you can add user now..!');
					setUser(data.data);
					setUserFound(true);
				} else {
					setMessage('user not found correct the username..!');
				}
				username.current.value = '';
			});
	}

	function addUserToTaskHandler() {
		if (user.userFound) {
			fetch(
				`http://localhost:3000/api/v1/todo/user/?todoId=${taskId}&userId=${user.data.userId}`,
				{
					method: 'POST',
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
					onClose();
				});
		}
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="form-dialog-title"
			PaperProps={{
				style: {
					backgroundColor: '#32312E', // Set the background color to any desired color
				},
			}}
			maxWidth="md"
			fullWidth
		>
			<DialogTitle
				id="form-dialog-title"
				sx={{
					color: '#ffffff',
				}}
			>
				Edit Task
			</DialogTitle>
			<DialogContent>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<TextField
						sx={feildStyling}
						label="username"
						variant="filled"
						inputRef={username}
						InputLabelProps={{
							style: {
								color: '#EB5E28', // Set the color of the label text to any desired color
							},
						}}
					/>
					<Button variant="contained" onClick={findUserHandler}>
						Find
					</Button>
				</div>
				<div>
					<p>{message}</p>
				</div>
			</DialogContent>
			<DialogActions
				sx={{
					padding: '3% 6%',
				}}
			>
				<Button onClick={onClose} color="primary" variant="outlined">
					Cancel
				</Button>
				<Button
					onClick={addUserToTaskHandler}
					color="primary"
					variant="contained"
					disabled={!userFound}
				>
					Add User
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default AddUserToTask;
