import React from 'react';
import { useRef } from 'react';
import './TaskForm.css';

import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TaskForm({ onSubmitHanlder }) {
	const title = useRef();
	const description = useRef();
	const priority = useRef();

	const feildStyling = {
		margin: '2% auto',
		fontSize: '1.2rem',
		backgroundColor: '#252422',
	};

	function submitHandler(event) {
		event.preventDefault();

		const obj = {
			title: title.current.value,
			description: description.current.value,
			priority: priority.current.value,
		};

		onSubmitHanlder(obj);

		title.current.value = '';
		description.current.value = '';
		priority.current.value = '';
	}

	return (
		<div className="taskFormDiv">
			<form>
				<Card
					sx={{
						backgroundColor: '#32312E',
						padding: '6%',
						boxShadow: 5,
					}}
				>
					<h1 className="formTitle">Add Your Task 📜</h1>
					<TextField
						sx={feildStyling}
						label="Title"
						variant="filled"
						fullWidth
						inputRef={title}
						InputLabelProps={{
							style: {
								color: '#EB5E28', // Set the color of the label text to any desired color
							},
						}}
					/>
					<TextField
						sx={feildStyling}
						label="Description"
						variant="filled"
						fullWidth
						inputRef={description}
						InputLabelProps={{
							style: {
								color: '#EB5E28', // Set the color of the label text to any desired color
							},
						}}
					/>

					<FormControl
						variant="filled"
						sx={{ ...feildStyling, minWidth: 120 }}
						fullWidth
					>
						<InputLabel>Priority</InputLabel>
						<Select inputRef={priority}>
							<MenuItem value="Low" sx={{ backgroundColor: '#252422' }}>
								Low
							</MenuItem>
							<MenuItem value="Medium" sx={{ backgroundColor: '#252422' }}>
								Medium
							</MenuItem>
							<MenuItem value="High" sx={{ backgroundColor: '#252422' }}>
								High
							</MenuItem>
						</Select>
					</FormControl>

					<Button
						sx={{
							...feildStyling,
							padding: '2%',
							fontWeight: 'bold',
							backgroundColor: '#EB5E28',
						}}
						variant="contained"
						fullWidth
						onClick={submitHandler}
					>
						Add Task
					</Button>
				</Card>
			</form>
		</div>
	);
}

export default TaskForm;
