import React from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
					borderRadius: '1rem',
					boxShadow: 5,
					backgroundColor: '#32312E',
				}}
			>
				<h1>Create Your 🎯DoItNow Account</h1>
				<p>
					Join the productivity revolution and unlock the full potential of your
					tasks with a few simple steps.
				</p>
				<TextField
					sx={feildStyling}
					label="Username"
					variant="filled"
					inputRef={username}
					InputLabelProps={{
						style: {
							color: '#EB5E28', // Set the color of the label text to any desired color
						},
					}}
				/>
				<TextField
					sx={feildStyling}
					label="Email"
					variant="filled"
					inputRef={email}
					InputLabelProps={{
						style: {
							color: '#EB5E28', // Set the color of the label text to any desired color
						},
					}}
				/>
				<TextField
					sx={feildStyling}
					label="Password"
					variant="filled"
					inputRef={password}
					InputLabelProps={{
						style: {
							color: '#EB5E28', // Set the color of the label text to any desired color
						},
					}}
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
					Sign Up for Free 🤝
				</Button>
				<br />
				<p>
					*Already have an account? Sign in to access your tasks and take
					control of your productivity.
				</p>
				<Link to="/signin">
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
						Sign In 🚀
					</Button>
				</Link>
			</Card>
		</div>
	);
}

export default SignUp;
