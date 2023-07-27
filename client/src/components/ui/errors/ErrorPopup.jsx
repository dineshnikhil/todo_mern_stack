import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
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
			<Dialog
				open={open}
				onClose={handleClose}
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
						color: '#ffffff',
					}}
				>
					<p>{message}</p>
				</DialogContent>
				<DialogActions
					sx={{
						padding: '3% 6%',
					}}
				>
					<Button onClick={handleClose} variant="contained">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ErrorPopup;
