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
		borderRadius: '.5rem',
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
						borderRadius: '1rem',
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
						required
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
						required
						inputRef={description}
						InputLabelProps={{
							style: {
								color: '#EB5E28', // Set the color of the label text to any desired color
							},
						}}
					/>

					<FormControl variant="filled" sx={{ ...feildStyling }} fullWidth>
						<InputLabel
							style={{
								color: '#EB5E28', // Set the color of the label text to any desired color
								// You can add more styles as needed (e.g., fontSize, fontWeight, etc.)
							}}
						>
							Priority
						</InputLabel>
						<Select
							inputRef={priority}
							MenuProps={{
								// Style the expanded section here
								PaperProps: {
									style: {
										backgroundColor: '#252422', // Set the background color of the expanded section
									},
								},
							}}
						>
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
