import React from 'react';
import { useContext, useState } from 'react';

import './UserPage.css';

import { Button } from '@mui/material';

import userContext from '../../store/userContext';
import CsvExportButton from '../../components/CsvExportButton';
import ComformationModal from '../../components/ui/popups/ComformationModal';
import CustomizedAccordions from '../../components/ui/CustomizedAccordions';

function UserPage() {
	const [deleteConformation, setDeleteConformation] = useState(false);
	const userCtx = useContext(userContext);
	console.log(userCtx);

	function onOpenDeleteConformation() {
		setDeleteConformation(true);
	}

	function onCloseDeleteConformation() {
		setDeleteConformation(false);
	}

	function deleteUserHandler() {
		console.log('deleting the user..!', userCtx.userId);
		fetch(`http://localhost:3000/api/v1/user/${userCtx.userId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((resData) => {
				if (resData.success) {
					userCtx.logoutUser();
				}
			});
	}

	return (
		<>
			{deleteConformation && (
				<ComformationModal
					title="Delete Conformation"
					content="Warning: Deleting your user account is irreversible. All your data and settings will be permanently removed. Please ensure you have backed up any important information before proceeding with the deletion."
					openUndo={deleteConformation}
					closeUndo={onCloseDeleteConformation}
					action={deleteUserHandler}
				/>
			)}
			<div className="userPageDiv">
				<p>
					Export your todo list as a CSV file to keep a backup or share it
					easily with others.
				</p>
				<CsvExportButton data={userCtx.todos} fileName="data.csv" />
				<p>want to delte the account..!</p>
				<Button variant="contained" onClick={onOpenDeleteConformation}>
					Delete Account 🗑️
				</Button>
				<CustomizedAccordions />
			</div>
		</>
	);
}

export default UserPage;
