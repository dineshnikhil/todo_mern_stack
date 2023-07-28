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
							<Link to="/user" className="userLink">
								<h1>{userCtx.username}</h1>
							</Link>
							<div>
								<Button
									sx={{ marginTop: '20%', fontWeight: 'bold' }}
									variant="contained"
									type="button"
									onClick={userCtx.logoutUser}
								>
									LogOut 👋
								</Button>
							</div>
						</div>
					) : (
						<div className="navActionDiv">
							<Link to="/signin" className="navLink">
								<Button
									sx={{ fontWeight: 'bold', padding: '10% 0' }}
									variant="contained"
									fullWidth
								>
									SignIn
								</Button>
							</Link>
							<Link to="/signup" className="navLink">
								<Button
									sx={{ fontWeight: 'bold', padding: '10% 0' }}
									variant="contained"
									fullWidth
								>
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
