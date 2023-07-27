import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

import SignIn from './routes/authentication/SignIn';
import Nav from './components/ui/Nav';
import SignUp from './routes/authentication/SignUp';
import Home from './routes/home/Home';

import UserProvider from './store/UserProvider';
import UserPage from './routes/User/UserPage';

const theme = createTheme({
	palette: {
		primary: {
			main: '#EB5E28',
		},
		text: {
			primary: '#dee2e6',
		},
	},
});

function App() {
	return (
		<React.Fragment>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<UserProvider>
					<ThemeProvider theme={theme}>
						<Nav />
						<main>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/signin" element={<SignIn />} />
								<Route path="/signup" element={<SignUp />} />
								<Route path="/user" element={<UserPage />} />
							</Routes>
						</main>
					</ThemeProvider>
				</UserProvider>
			</LocalizationProvider>
		</React.Fragment>
	);
}

export default App;
