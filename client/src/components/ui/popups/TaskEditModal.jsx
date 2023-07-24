import React from 'react';
import { useRef } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';

function TaskEditModal({ task, open, onCloseHandler }) {
	const title = useRef();
	const description = useRef();

	const feildStyling = {
		margin: '2% auto',
		fontSize: '1.2rem',
		backgroundColor: '#252422',
	};

	function onClose() {
		onCloseHandler();
	}

	function onSave() {
		const obj = {
			title: title.current.value,
			description: description.current.value,
		};

		console.log(obj);
		onCloseHandler();
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
		>
			<DialogTitle
				id="form-dialog-title"
				sx={{
					color: '#252422',
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
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancel
				</Button>
				<Button onClick={onSave} color="primary">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default TaskEditModal;
