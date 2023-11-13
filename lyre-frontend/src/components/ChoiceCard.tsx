
/*
    About: Routing 
*/

import React from 'react';

// * Routing
import { Link } from 'react-router-dom';

// * Material-UI Components
import { Box, Card, Typography } from '@mui/material';


interface ChoiceCardProps {
    title: string;
    to: string;
    image?: string;
};

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, to, image }) => {

    return (
        <Link to={to}>
            <Card sx={{ width: 250, height: 220, p: 2, textAlign: 'center' }}>
                <Typography variant='subtitle2'>
                    {title}
                </Typography>
                <Box component="img" src={image} sx={{ width: 200, height: 200 }} />
            </Card>
        </Link>
    )
}


export default ChoiceCard;