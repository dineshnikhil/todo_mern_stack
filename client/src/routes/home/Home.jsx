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
