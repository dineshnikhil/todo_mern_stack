import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function FeatureCard({ img, title, description }) {
	return (
		<Card sx={{ maxWidth: 345, backgroundColor: '#252422' }}>
			<CardActionArea>
				<CardMedia component="img" image={img} alt="green iguana" />
				<CardContent
					sx={{
						backgroundColor: '#32312E',
					}}
				>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{
							color: '#EB5E28',
						}}
					>
						{title}
					</Typography>
					<Typography variant="body2" color="gray">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default FeatureCard;
