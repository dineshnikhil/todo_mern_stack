import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import './Nav.css';

import userContext from '../../store/userContext';

function Nav() {
	const userCtx = useContext(userContext);
	console.log(userCtx.logedIn);
	return (
		<React.Fragment>
			<AppBar
				sx={{
					backgroundColor: '#EB5E28',
					padding: '0.5% 4%',
				}}
			>
				<Toolbar className="navLinkDiv">
					<div>
						<Link to="/" className="logo">
							<h2>🎯 DoItNow</h2>
						</Link>
					</div>
					{userCtx.logedIn ? (
						<div>
							<button type="button">LogOut</button>
						</div>
					) : (
						<div>
							<Link to="/signin" className="navLink">
								SignIN
							</Link>
							<Link to="/signup" className="navLink">
								SignUp
							</Link>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Nav;
