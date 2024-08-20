import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import QuesTitle from './QuesTitle'

export default function BlankQues({ qNo, ques, handleAns }) {

    const [userInputs, setUserInputs] = useState(Array(ques.answer.length).fill(""));

    const handleInputChange = (index, value) => {
        const newInputs = [...userInputs];
        newInputs[index] = value;
        setUserInputs(newInputs);
    };

    useEffect(() => {
        handleAns([...userInputs])
    }, [userInputs])

    const renderInput = (text, index) => {
        const length = text.trim().length;
        const width = length * 8 + 10; // Approximate width per character
        return (
            <input
                type="text"
                size={length} // Set size to match the length of the answer
                maxLength={length} // Limit input to the exact number of characters
                style={{ width: `${width}px`, textAlign: "center" }}
                value={userInputs[index]} // Bind the input value to the state
                onChange={(e) => handleInputChange(index, e.target.value)} // Update the state on input change
            />
        );
    };
    return (
        <Box>
            <QuesTitle title={ques.question} qNo={qNo} ></QuesTitle>

            <Box>
                {ques.options.map((option, index) => (
                    <React.Fragment key={index}>
                        <Box component="span">{option}</Box>
                        {index < ques.answer.length && renderInput(ques.answer[index], index)}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    )
}
