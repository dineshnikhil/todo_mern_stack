import React from 'react';

import Fab from '@mui/material/Fab';

function TaskUserBlock({ user }) {
	return (
		<Fab
			variant="extended"
			size="small" // You can change the size to 'small', 'medium', or 'large'
			sx={{
				fontSize: '.8rem',
				padding: '2%',
				marginRight: '1%',
				borderRadius: '.5rem',
				backgroundColor: '#252422',
				color: '#ffffff',
				'&:hover': {
					backgroundColor: '#1b1b1a',
				},
			}}
		>
			{user}
			<button>X</button>
		</Fab>
	);
}

export default TaskUserBlock;
