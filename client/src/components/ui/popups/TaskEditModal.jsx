import React from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@mui/material';

function TaskEditModal({ open, onCloseHandler }) {
	function onClose() {
		onCloseHandler();
	}

	function onSave() {}
	return (
		<Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					name="title"
					label="Title"
					fullWidth
					//   value={editedTask.title}
					//   onChange={handleInputChange}
				/>
				<TextField
					margin="dense"
					name="description"
					label="Description"
					fullWidth
					multiline
					rows={4}
					//   value={editedTask.description}
					//   onChange={handleInputChange}
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
