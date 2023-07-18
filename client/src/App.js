import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import SignIn from './routes/authentication/SignIn';
import Nav from './components/ui/Nav';
import AddTask from './components/pages/AddTask';
import SignUp from './routes/authentication/SignUp';
import ErrorPopup from './components/ui/errors/ErrorPopup';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<ErrorPopup />
			<main>
				<Routes>
					<Route path="/" element={<AddTask />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</main>
		</React.Fragment>
	);
}

export default App;
