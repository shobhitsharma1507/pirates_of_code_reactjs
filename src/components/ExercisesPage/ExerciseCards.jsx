import { Box, Link } from '@mui/material'
import React from 'react'


export default function ExerciseCard({ category }) {
    return (
        <Link href={"/exercises/" + category.toLowerCase()} underline='hover' color="inherit">
            <Box className="exericise-card">
                {category}
            </Box>
        </Link>

    )
}
