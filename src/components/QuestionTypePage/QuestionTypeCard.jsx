import * as React from 'react';
import Box from '@mui/material/Box';
import "./QuestionTypeCard.css"



export default function QuestionTypeCard({ category = "JavaScript", imageUrl }) {
    return (
        <Box
            className="question-type-card flex-row"
            bgcolor='background.sidebar'
        >
            {/* Image Section */}
            <Box
                component="img"
                src={imageUrl}
                alt="Card Image"
                sx={{
                    height: '50%',
                    width: '100%',
                    objectFit: 'cover'
                }}
            />

            {/* Text Section */}
            <Box className="flex-col question-types" sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center"

            }}
                color="text.main"
            >
                <Box className="question-type" >
                    Easy
                </Box>
                <Box className="question-type">
                    Intermediate
                </Box>
                <Box className="question-type" >
                    Hard
                </Box>
            </Box>
        </Box>
    );
}
