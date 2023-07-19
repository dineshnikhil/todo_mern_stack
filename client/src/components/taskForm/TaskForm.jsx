import React from 'react';
import './TaskForm.css';

import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TaskForm() {
	const feildStyling = {
		width: '90%',
		margin: '2% auto',
		fontSize: '1.2rem',
	};

	return (
		<div className="taskFormDiv">
			<form>
				<Card
					sx={{
						padding: '6%',
						boxShadow: 5,
					}}
				>
					<h1 className="formTitle">Add Your Task 📜</h1>
					<TextField sx={feildStyling} label="Title" variant="filled" />
					<TextField sx={feildStyling} label="Description" variant="filled" />

					<FormControl variant="filled" sx={{ ...feildStyling, minWidth: 120 }}>
						<InputLabel>Priority</InputLabel>
						<Select>
							<MenuItem value="Low">Low</MenuItem>
							<MenuItem value="Medium">Medium</MenuItem>
							<MenuItem value="High">High</MenuItem>
						</Select>
					</FormControl>

					<Button
						sx={{
							...feildStyling,
							padding: '2%',
							fontWeight: 'bold',
						}}
						variant="contained"
					>
						Add Task
					</Button>
				</Card>
			</form>
		</div>
	);
}

export default TaskForm;
