/*
    About: Title Component
*/

import React from 'react';

// * Material-UI Components
import { Box, Typography } from '@mui/material';

interface TitleProps {
    title: string;
    capitalize?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, capitalize = true }) => {
    return (
        <Box sx={{ mb: 2, widht: '100%', borderBottom: '2px solid lightblue' }}>
            <Typography variant='h6'>
                {capitalize ? title.toUpperCase() : title}
            </Typography>
        </Box>
    )
};

export default Title;