/*
	About: Default Home Page
*/

import React from 'react';

// * Material-UI Components
import { Box, Grid } from '@mui/material';

// * My Components
import ChoiceCard from '../components/ChoiceCard';

// * Imaged
import LyreListening from '../assets/images/lyre-listening.jpeg'
import ChameleonTalking from '../assets/images/chameleon-talking.jpeg' 


const choiceCards = [
	{
		to: '/comprehension',
		title: 'Comprehension'
	},
	{
		to: '/expression',
		title: 'Expression'
	},
	{
		to: '/listening',
		title: 'Listening',
		image: LyreListening
	},
	{
		to: '/speaking',
		title: 'Speaking',
		image: ChameleonTalking
	}
]


const Home: React.FC = () => {
	return (
		<Box>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={8}
				sx={{ height: '70vh' }}
			>
				{choiceCards.map(choice =>
					<Grid item>
						<ChoiceCard
							to={choice.to}
							title={choice.title}
							image={choice.image}
						/>
					</Grid>
				)}
			</Grid>
		</Box>
	)
};

export default Home;