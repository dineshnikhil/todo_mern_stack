import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

import './Nav.css';

import userContext from '../../store/userContext';

function Nav() {
	const userCtx = useContext(userContext);
	return (
		<React.Fragment>
			<AppBar
				sx={{
					backgroundColor: '#32312E',
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
						<div className="navActionDiv">
							<h1>{userCtx.username}</h1>
							<div>
								<Button
									sx={{ marginTop: '20%' }}
									variant="contained"
									type="button"
									onClick={userCtx.logoutUser}
								>
									LogOut
								</Button>
							</div>
						</div>
					) : (
						<div className="navActionDiv">
							<Link to="/signin" className="navLink">
								<Button sx={{ marginTop: '20%' }} variant="contained">
									SignIn
								</Button>
							</Link>
							<Link to="/signup" className="navLink">
								<Button sx={{ marginTop: '20%' }} variant="contained">
									SignUp
								</Button>
							</Link>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Nav;
