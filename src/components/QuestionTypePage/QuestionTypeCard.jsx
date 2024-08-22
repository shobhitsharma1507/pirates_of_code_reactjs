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
            <Box className="flex-col" sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center"
            }}>
                <Box variant="h6" gutterBottom>
                    Easy
                </Box>
                <Box variant="body1" gutterBottom>
                    Intermediate
                </Box>
                <Box variant="body2" color="text.secondary">
                    Hard
                </Box>
            </Box>
        </Box>
    );
}
