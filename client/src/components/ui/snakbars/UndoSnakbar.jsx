import React from 'react';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function UndoSnakbar({ openUndo, closeUndo }) {
	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={closeUndo}>
				UNDO
			</Button>
		</React.Fragment>
	);

	function handleSnackbarClickAway(event) {
		event.stopPropagation();
	}

	return (
		<div onMouseDown={handleSnackbarClickAway}>
			{/* <ClickAwayListener onClickAway={handleSnackbarClickAway}> */}
			<Snackbar
				open={openUndo}
				autoHideDuration={3000}
				onClose={closeUndo}
				message="Dont want to Delete the Task..!"
				action={action}
			/>
			{/* </ClickAwayListener> */}
		</div>
	);
}

export default UndoSnakbar;
