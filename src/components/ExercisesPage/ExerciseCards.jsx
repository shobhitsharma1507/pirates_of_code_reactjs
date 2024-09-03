import { Box, Link } from '@mui/material'
import React from 'react';
import './ExerciseCards.css'

export default function ExerciseCard({ category }) {
    return (

        <Box className="flex-col exericise-card">
            <Box className="exercise-card-title">
                {category}
            </Box>
            <Box className="exercise-card-description"> {category.toUpperCase()} questions for beginner to advance  </Box>
            <Link href={"/exercises/" + category.toLowerCase()} underline='hover' color="inherit">
                <Box className="exercise-card-button">Start</Box>
            </Link>
        </Box >


    )
}
