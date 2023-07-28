import React from 'react';
import { useContext } from 'react';

import './UserPage.css';
import userContext from '../../store/userContext';

import CsvExportButton from '../../components/CsvExportButton';

function UserPage() {
	const userCtx = useContext(userContext);
	console.log(userCtx);
	return (
		<div className="userPageDiv">
			<p>
				Export your todo list as a CSV file to keep a backup or share it easily
				with others.
			</p>
			<CsvExportButton data={userCtx.todos} fileName="data.csv" />
		</div>
	);
}

export default UserPage;
