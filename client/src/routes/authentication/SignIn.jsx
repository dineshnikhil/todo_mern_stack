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
				if (!resData.login) {
					setErrorTitle('Credential Error');
					setErrorMessage('Username or Password is incorrect..!');
					setOpen(true);
				} else {
					navigate('/');
					userCtx.loginUser();
					console.log(userCtx);
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
							backgroundColor: '#EB5E28',
						}}
						variant="contained"
						onClick={onSubmitHandler}
					>
						Sign In
					</Button>
				</Card>
			</div>
		</React.Fragment>
	);
}

export default SignIn;
