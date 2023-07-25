import React from 'react';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

function UndoSnakbar({ openUndo, closeUndo }) {
	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={closeUndo}>
				UNDO
			</Button>
		</React.Fragment>
	);

	return (
		<div>
			<Snackbar
				open={openUndo}
				autoHideDuration={3000}
				onClose={closeUndo}
				message="Dont want to Delete the Task..!"
				action={action}
			/>
		</div>
	);
}

export default UndoSnakbar;
