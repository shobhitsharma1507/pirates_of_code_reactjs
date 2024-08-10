import { Box } from '@mui/material'
import React from 'react'

export default function QuesTitle({ title, qNo }) {
    return (
        <Box>
            <Box fontSize={36} fontWeight={400} mb={2}>Question {qNo}</Box>
            <Box fontSize={24} fontWeight={400} mb={2}>{title}</Box>
        </Box>
    )
}
