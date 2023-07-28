import React from 'react';
import { Link } from 'react-router-dom';

import './Wellcome.css';
import addUserFeature from '../assets/images/addUserFeatureImg.svg';
import taskManagementFeature from '../assets/images/taskManagementFeatureImg.svg';
import exportDataFeature from '../assets/images/exportDataFeatureImg.svg';
import wellcomeLogo from '../assets/images/wellcomeLogo.svg';

import { Button } from '@mui/material';

import FeatureCard from './ui/featureCards/FeatureCard';

function Wellcome() {
	return (
		<>
			<div className="wellcomeDiv">
				<div>
					<h1>Welcome to TaskMaster: Your Ultimate Todo Task Manager</h1>
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
