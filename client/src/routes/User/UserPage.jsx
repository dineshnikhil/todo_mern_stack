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
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eum
				repellendus fugiat atque ratione corporis! Sapiente ut voluptatibus
				nobis soluta quia debitis illum velit, doloribus maxime mollitia, quas
				earum minima!
			</p>
			<CsvExportButton data={userCtx.todos} fileName="data.csv" />
		</div>
	);
}

export default UserPage;
