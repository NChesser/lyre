
/*
    About: Sentence Display Component 
*/

import React from 'react';

// * Material-UI Components
import { Card } from '@mui/material';

// * My Components
import Sentence from './Sentence';


interface SentenceDisplayBoxProps {
    sentences: Array<string>;
};

const SentenceDisplayBox: React.FC<SentenceDisplayBoxProps> = ({ sentences }) => {
    return (
        <Card sx={{ width: '100%', height: '50%', border: '2px solid lightgrey', p: 2 }} square>
            {sentences.map(sentence => <Sentence sentence={sentence + '. '} />)}
        </Card>
    )
}


export default SentenceDisplayBox;