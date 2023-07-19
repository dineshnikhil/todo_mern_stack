import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import SignIn from './routes/authentication/SignIn';
import Nav from './components/ui/Nav';
import SignUp from './routes/authentication/SignUp';
import Home from './routes/home/Home';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</main>
		</React.Fragment>
	);
}

export default App;
