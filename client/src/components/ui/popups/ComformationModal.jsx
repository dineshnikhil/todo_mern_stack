import React from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';

function ComformationModal({ openUndo, closeUndo, deleteTask }) {
	function deleteHandler() {
		deleteTask();
		closeUndo();
	}
	return (
		<Dialog
			open={openUndo}
			onClose={closeUndo}
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
					backgroundColor: '#252422',
					color: '#ffffff',
				}}
			>
				Edit Task
			</DialogTitle>
			<DialogContent>
				<h2>Do You want to delete it..!</h2>
			</DialogContent>
			<DialogActions
				sx={{
					padding: '3% 6%',
				}}
			>
				<Button onClick={closeUndo} color="primary" variant="contained">
					Cancel
				</Button>
				<Button onClick={deleteHandler} color="primary" variant="outlined">
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ComformationModal;
