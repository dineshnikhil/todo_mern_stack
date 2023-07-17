import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Nav() {
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<Link to="/">
						<h2>DoItNow</h2>
					</Link>

					<div>
						<Link to="/signin">SignIN</Link>
						<Link to="/signup">SignUp</Link>
					</div>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Nav;
