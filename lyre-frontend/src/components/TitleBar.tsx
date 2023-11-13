/*
    About: Title Component
*/

import React from 'react';

// * Material-UI Components
import { Toolbar, Typography } from '@mui/material';


const TitleBar: React.FC = () => {
    return (
        <Toolbar disableGutters sx={{ textAlign: 'center', background: 'lightblue', pl: 50, pr: 50 }}>
            <Typography variant='h5'>
                Lyre Language
            </Typography>
        </Toolbar>
    )
};

export default TitleBar;