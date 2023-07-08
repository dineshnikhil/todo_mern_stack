import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Nav() {
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" component="div">
						DoItNow
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Nav;
