import { Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import './BooleanQues.css';
import QuesTitle from './QuesTitle';

let qNo = 1;
let ques = "Is React a Framework?";
let options = ["True", "False"];

export default function BooleanQues() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box>
            <QuesTitle title={ques} qNo={qNo} ></QuesTitle>
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
                            value={option.toLowerCase()}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </Box>
        </Box>
    );
}
