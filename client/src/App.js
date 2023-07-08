import React from 'react';
import './App.css';
import Nav from './components/ui/Nav';
import AddTask from './components/pages/AddTask';
import TaskCard from './components/ui/TaskCard';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<main>
				<AddTask />
			</main>
		</React.Fragment>
	);
}

export default App;
