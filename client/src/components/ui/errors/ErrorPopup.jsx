import React from 'react';
import { useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

function ErrorPopup({ title, message, open, onHandleOpen, onHandleClose }) {
	const handleOpen = () => {
		onHandleOpen();
	};

	const handleClose = () => {
		onHandleClose();
	};
	return (
		<div>
			{/* Button to trigger the popup */}
			<Button onClick={handleOpen}>Show Error Popup</Button>

			{/* Dialog component for the popup */}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{message}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ErrorPopup;
