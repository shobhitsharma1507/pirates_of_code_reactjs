import { Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './BooleanQues.css';
import QuesTitle from './QuesTitle';

let qNo = 1;
let ques = "Is React a Framework?";
let options = ["True", "False"];

export default function BooleanQues({ qNo, ques, handleAns }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(() => event.target.value);
    };

    useEffect(() => {
        // console.log(value)
        handleAns(value)
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
                    {options.map((option, index) => (
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
