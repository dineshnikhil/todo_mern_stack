import React from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';

function ComformationModal({ title, content, openUndo, closeUndo, action }) {
	function actionHandler() {
		action();
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
			maxWidth="md"
			fullWidth
		>
			<DialogTitle
				id="form-dialog-title"
				sx={{
					backgroundColor: '#252422',
					color: '#ffffff',
				}}
			>
				{title}
			</DialogTitle>
			<DialogContent
				sx={{
					padding: '10% auto',
				}}
			>
				<p>{content}</p>
			</DialogContent>
			<DialogActions
				sx={{
					padding: '3% 6%',
				}}
			>
				<Button onClick={closeUndo} color="primary" variant="contained">
					Cancel
				</Button>
				<Button onClick={actionHandler} color="primary" variant="outlined">
					Yeap!
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ComformationModal;
