import React from 'react';
import { useContext } from 'react';

import './Home.css';
import AddTask from '../../components/pages/AddTask';
import Tasks from '../../components/tasks/Tasks';
import Wellcome from '../../components/Wellcome';

import userContext from '../../store/userContext';

function Home() {
	const userCtx = useContext(userContext);
	console.log(userCtx);

	// const dateString = userCtx.todos[0].createdAt;
	// const dateObj = new Date(dateString);
	// const year = dateObj.getFullYear(); // 2023
	// const monthString = dateObj.toLocaleString('default', { month: 'short' }); // "Jul"
	// const day = dateObj.getDate();
	// console.log(day, monthString, year);

	return (
		<div className="homeDiv">
			{userCtx.logedIn ? (
				<>
					<AddTask />
					<Tasks />
				</>
			) : (
				<Wellcome />
			)}
		</div>
	);
}

export default Home;
