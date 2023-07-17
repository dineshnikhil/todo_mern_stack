import React from 'react';
import { useRef } from 'react';
import './SignIn.css';

import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignIn() {
	const username = useRef();
	const password = useRef();

	const feildStyling = {
		width: '90%',
		margin: '2%',
		fontSize: '1.2rem',
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const obj = {
			username: username.current.value,
			password: password.current.value,
		};

		console.log(obj);
	};

	return (
		<div className="signin_div">
			<Card
				sx={{
					padding: '10%',
					boxShadow: 5,
				}}
			>
				<h1>Sign In</h1>
				<TextField
					sx={feildStyling}
					label="Username"
					variant="filled"
					inputRef={username}
				/>
				<TextField
					sx={feildStyling}
					label="Password"
					variant="filled"
					inputRef={password}
				/>
				<Button
					sx={{
						...feildStyling,
						padding: '2%',
						fontWeight: 'bold',
					}}
					variant="contained"
					onClick={onSubmitHandler}
				>
					Sign In
				</Button>
			</Card>
		</div>
	);
}

export default SignIn;
