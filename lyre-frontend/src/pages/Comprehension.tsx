/*
    About: Page for Comprehension
*/

import React, { useState, useEffect } from 'react';

// * HTTP Module
import axios from 'axios';

// * Material-UI Components
import { Box, Toolbar, Typography } from '@mui/material';

// * My Components
import Title from '../components/Title';
import SentenceDisplayBox from '../components/SentenceDisplayBox';

// * Constants
// const 


// * Component
const Comprehension: React.FC = () => {
    // State Variables
    const [test, setTest] = useState < string > ('');
    const [story, setStory] = useState < string > ('');

    // Functions

    // Effects
    useEffect(() => {
        axios.post('/comprehension')
            .then(response => {
                setTest(response.data);
            })

        axios.get('/story')
            .then(response => {
                setStory(response.data);
            })
    }, []);


    return (
        <Box>
            <Title title={`Comprehension - ${test}`} />
            <SentenceDisplayBox sentences={(story.split('.') || [])} />
        </Box>
    )
};

export default Comprehension;