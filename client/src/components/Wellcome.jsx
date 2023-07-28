import React from 'react';
import { Link } from 'react-router-dom';

import './Wellcome.css';
import addUserFeature from '../assets/images/addUserFeatureImg.svg';
import taskManagementFeature from '../assets/images/taskManagementFeatureImg.svg';
import exportDataFeature from '../assets/images/exportDataFeatureImg.svg';
import wellcomeLogo from '../assets/images/wellcomeLogo.svg';

import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import FeatureCard from './ui/featureCards/FeatureCard';

function Wellcome() {
	return (
		<>
			<div className="wellcomeDiv">
				<div>
					<h1>Welcome to 🎯DoItNow : Your Ultimate Todo Task Manager</h1>
					<div className="wellcomeActionDiv">
						<Link to="/signin" className="actionLink">
							<Button
								sx={{
									fontSize: '1.1rem',
									fontWeight: 'bold',
									padding: '4% 0',
								}}
								variant="contained"
								fullWidth
							>
								Sign In
							</Button>
						</Link>
					</div>
					<p>
						Are you tired of juggling endless to-do lists, sticky notes, and
						reminders scattered across various platforms? It's time to bring
						order and efficiency to your daily tasks with TaskMaster, the
						premier todo task manager designed to elevate your productivity to
						new heights.
					</p>
				</div>
				<div>
					<img src={wellcomeLogo} alt="simple wellcome logo of the brand." />
				</div>
			</div>
			<div>
				<Card
					sx={{
						backgroundColor: '#EB5E28',
						color: '#252422',
						padding: '5% 12%',
						boxShadow: 5,
						borderRadius: '1rem',
					}}
				>
					<h1 style={{ fontSize: '2rem' }}>Why you Need this tool..</h1>
					<Typography
						sx={{
							color: '#32312E',
							fontSize: '1.3rem',
							fontWeight: 'semiBold',
						}}
					>
						📝 Todo task managers are invaluable tools for enhancing day-to-day
						productivity. They enable users to organize and prioritize tasks,
						break down complex projects into manageable steps, and set reminders
						and deadlines to stay on track. By providing a clear overview of
						pending and completed tasks, these managers empower users to manage
						their time efficiently, reduce stress, and accomplish their goals
						effectively. 💪 Additionally, with seamless collaboration features
						and accessibility across devices, users can collaborate with teams,
						access their tasks on the go, and integrate with other productivity
						tools, making todo task managers essential companions for
						streamlining daily tasks and optimizing productivity. 🚀
					</Typography>
				</Card>
			</div>
			<div className="featuresDiv">
				<h1>DoItNow Features</h1>
				<div className="featuresCardsDiv">
					<FeatureCard
						title="Task Management"
						description="Take control of your tasks and boost productivity with our intuitive task management feature."
						img={taskManagementFeature}
					/>
					<FeatureCard
						title="Collaborative Task Assignment"
						description="Effortlessly collaborate and assign tasks to team members with our streamlined 'Add User to Task' feature."
						img={addUserFeature}
					/>
					<FeatureCard
						title="Seamless Todo Data Export"
						description="Effortlessly export your todo data to CSV format, enabling seamless integration with other todo platforms."
						img={exportDataFeature}
					/>
				</div>
			</div>
		</>
	);
}

export default Wellcome;
