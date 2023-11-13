
/*
    About: Sentence Component 
*/

import React from 'react';

// * HTTP Module
import axios from 'axios';

// * Material-UI Components
import { Typography } from '@mui/material';


interface SentenceProps {
    sentence: string;
};

const Sentence: React.FC<SentenceProps> = ({ sentence }) => {

    // * Functions
    const saveSentence = (sentence: string) => {
        axios.post('/save-sentence', { sentence })
            .then(response => {
                console.log("🚀 ~ file: Sentence.tsx:22 ~ saveSentence ~ response:", response)
            })
    };



    return (
        <Typography
            component='span'
            variant='subtitle2'
            sx={{
                ':hover': {
                    background: 'lightblue',
                    cursor: 'pointer'
                }
            }}
            onClick={() => saveSentence(sentence)}
        >
            {sentence}
        </Typography>
    )
};


export default Sentence;