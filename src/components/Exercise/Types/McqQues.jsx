import { Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './McqQues.css';
import QuesTitle from './QuesTitle';


// let qNo = 1;
// let ques = "Who developed React?";
// let options = ["Google", "Facebook", "Twitter", "Microsoft"];

export default function McqQues({ qNo, ques, handleAns }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        handleAns(prev => [value])
    }, [value])



    return (
        <Box>
            <QuesTitle title={ques.question} qNo={qNo} ></QuesTitle>
            <Box>
                <RadioGroup
                    aria-labelledby="boolean-question-group"
                    name="boolean-question-group"
                    value={value}
                    onChange={handleChange}
                >
                    {ques.options.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            value={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </Box>
        </Box>
    );
}
