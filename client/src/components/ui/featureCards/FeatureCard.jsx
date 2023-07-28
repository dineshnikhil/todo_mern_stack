import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// EB5E28
// 252422
function FeatureCard({ img, title, description }) {
	return (
		<Card sx={{ width: '30%', backgroundColor: '#EB5E28' }}>
			<CardActionArea>
				<CardMedia
					component="img"
					image={img}
					alt="green iguana"
					sx={{
						width: '60%',
						margin: '5% auto',
					}}
				/>
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
					<Typography
						variant="body2"
						color="#ffffff"
						sx={{
							opacity: '0.5',
						}}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default FeatureCard;
