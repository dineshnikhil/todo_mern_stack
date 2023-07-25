import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
	const navigate = useNavigate();

	const username = useRef();
	const email = useRef();
	const password = useRef();

	const feildStyling = {
		width: '90%',
		margin: '2%',
		fontSize: '1.2rem',
		backgroundColor: '#252422',
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const obj = {
			username: username.current.value,
			email: email.current.value,
			password: password.current.value,
		};

		fetch('http://localhost:3000/api/v1/signup', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then((response) => response.json())
			.then((resData) => {
				username.current.value = '';
				password.current.value = '';
				email.current.value = '';

				navigate('/signin');
			});
	};

	return (
		<div className="signin_div">
			<Card
				sx={{
					padding: '10%',
					boxShadow: 5,
					backgroundColor: '#32312E',
				}}
			>
				<h1>Sign Up</h1>
				<TextField
					sx={feildStyling}
					label="Username"
					variant="filled"
					inputRef={username}
				/>
				<TextField
					sx={feildStyling}
					label="Email"
					variant="filled"
					inputRef={email}
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
						backgroundColor: '#EB5E28',
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

export default SignUp;
