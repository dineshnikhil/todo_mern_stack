import React from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
	<MuiAccordion
		disableGutters
		elevation={0}
		square
		{...props}
		sx={{
			backgroundColor: '#EB5E28',
		}}
	/>
))(({ theme }) => ({
	border: `2px solid #252422`,
	borderRadius: '1rem',
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
		sx={{
			color: '#252422',
		}}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(5),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	backgroundColor: '#32312E',
}));

function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>Export the Tasks Data ⬆</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Export your todo list as a CSV file to keep a backup or share it
						easily with others.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Collapsible Group Item #2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>Delete Account 🗑️</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Deleting your user account is irreversible. All your data and
						settings will be permanently removed. Please ensure you have backed
						up any important information before proceeding with the deletion.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default CustomizedAccordions;
