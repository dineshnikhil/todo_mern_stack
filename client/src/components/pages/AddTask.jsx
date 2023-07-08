import React from 'react';

import './AddTask.css';

import TextField from '@mui/material/TextField';

function AddTask() {
	return (
		<React.Fragment>
			<div className="formDiv">
				<form>
					<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				</form>
			</div>
		</React.Fragment>
	);
}

export default AddTask;
