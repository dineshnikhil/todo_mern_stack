import React from 'react';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import userContext from '../../store/userContext';

import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ErrorPopup from '../../components/ui/errors/ErrorPopup';

function SignIn() {
	const [open, setOpen] = useState(false);
	const [errorTitle, setErrorTitle] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const userCtx = useContext(userContext);

	const username = useRef();
	const password = useRef();
	const navigate = useNavigate();

	function errorOpen() {
		setOpen(true);
	}

	function errorClose() {
		setOpen(false);
	}

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
			password: password.current.value,
		};

		fetch('http://localhost:3000/api/v1/signin', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then((response) => response.json())
			.then((resData) => {
				if (resData.success) {
					if (!resData.user.loginStatus) {
						setErrorTitle('Credential Error');
						setErrorMessage('Password is incorrect..!');
						setOpen(true);
						password.current.value = '';
					} else {
						userCtx.loginUser(resData.user, username.current.value);
						localStorage.setItem('Auterization', resData.user.token);
						navigate('/');
					}
				} else {
					setErrorTitle('Credential Error');
					setErrorMessage('User with this username not exists..!');
					setOpen(true);
					username.current.value = '';
					password.current.value = '';
				}
			});

		// console.log(obj);
	};

	return (
		<React.Fragment>
			{open && (
				<ErrorPopup
					open={open}
					title={errorTitle}
					message={errorMessage}
					onHandleClose={errorClose}
					onHandleOpen={errorOpen}
				/>
			)}
			<div className="signin_div">
				<Card
					sx={{
						padding: '10%',
						boxShadow: 5,
						backgroundColor: '#32312E',
					}}
				>
					<h1>Welcome Back!</h1>
					<h2>Sign In to Your 🎯DoItNow Account</h2>
					<p>
						Sign in and pick up where you left off, your tasks are waiting for
						you!
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
						Sign In 🚀
					</Button>
				</Card>
			</div>
		</React.Fragment>
	);
}

export default SignIn;
