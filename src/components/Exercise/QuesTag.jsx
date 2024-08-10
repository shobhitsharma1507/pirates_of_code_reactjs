import { Box } from '@mui/material'
import React from 'react'
import './QuesTag.css'

export default function QuesTag({ tagName }) {
    return (
        <Box bgcolor="background.primaryBtn" color="text.button" className="flex-row ques-tag-component" > {tagName}</Box>
    )
}
