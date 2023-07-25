import React from 'react';
import { useRef, useContext } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import userContext from '../../../store/userContext';

function TaskEditModal({ task, open, onCloseHandler }) {
	const title = useRef();
	const description = useRef();
	const priority = useRef();

	const userCtx = useContext(userContext);

	const feildStyling = {
		margin: '2% auto',
		fontSize: '1.2rem',
		backgroundColor: '#252422',
	};

	function onClose() {
		onCloseHandler();
	}

	function onSave() {
		const dataToUpdate = {
			title: title.current.value,
			description: description.current.value,
			priority: priority.current.value,
		};

		fetch(`http://localhost:3000/api/v1/todo/${task.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToUpdate),
		})
			.then((response) => response.json())
			.then((resData) => {
				userCtx.updateUserTodos(userCtx.userId);
				onCloseHandler();
			});
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
				<TextField
					sx={feildStyling}
					label="Title"
					variant="filled"
					fullWidth
					defaultValue={task.title}
					inputRef={title}
					InputLabelProps={{
						style: {
							color: '#EB5E28', // Set the color of the label text to any desired color
						},
					}}
				/>
				<TextField
					sx={feildStyling}
					label="Description"
					variant="filled"
					fullWidth
					defaultValue={task.description}
					inputRef={description}
					InputLabelProps={{
						style: {
							color: '#EB5E28', // Set the color of the label text to any desired color
						},
					}}
				/>
				<FormControl variant="filled" sx={{ ...feildStyling }} fullWidth>
					<InputLabel>Priority</InputLabel>
					<Select
						inputRef={priority}
						defaultValue={task.priority}
						MenuProps={{
							// Style the expanded section here
							PaperProps: {
								style: {
									backgroundColor: '#252422', // Set the background color of the expanded section
								},
							},
						}}
					>
						<MenuItem value="Low">Low</MenuItem>
						<MenuItem value="Medium">Medium</MenuItem>
						<MenuItem value="High">High</MenuItem>
					</Select>
				</FormControl>
			</DialogContent>
			<DialogActions
				sx={{
					padding: '3% 6%',
				}}
			>
				<Button onClick={onClose} color="primary" variant="outlined">
					Cancel
				</Button>
				<Button onClick={onSave} color="primary" variant="contained">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default TaskEditModal;
