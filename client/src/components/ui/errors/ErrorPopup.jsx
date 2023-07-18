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

function ErrorPopup() {
	const [open, setOpen] = useState(false); // State to control the popup

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			{/* Button to trigger the popup */}
			<Button onClick={handleOpen}>Show Error Popup</Button>

			{/* Dialog component for the popup */}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Error</DialogTitle>
				<DialogContent>
					<DialogContentText>
						An error occurred. Please try again later.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ErrorPopup;
