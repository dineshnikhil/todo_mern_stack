import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

import SignIn from './routes/authentication/SignIn';
import Nav from './components/ui/Nav';
import SignUp from './routes/authentication/SignUp';
import Home from './routes/home/Home';

import UserProvider from './store/UserProvider';

const theme = createTheme({
	palette: {
		primary: {
			main: '#EB5E28',
		},
		text: {
			primary: '#ffffff',
		},
	},
});

function App() {
	return (
		<React.Fragment>
			<UserProvider>
				<ThemeProvider theme={theme}>
					<Nav />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signin" element={<SignIn />} />
							<Route path="/signup" element={<SignUp />} />
						</Routes>
					</main>
				</ThemeProvider>
			</UserProvider>
		</React.Fragment>
	);
}

export default App;
