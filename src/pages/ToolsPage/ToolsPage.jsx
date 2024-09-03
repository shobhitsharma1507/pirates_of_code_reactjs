import { Box } from '@mui/material'
import React from 'react';
import './ToolsPage.css'

export default function ToolsPage() {
    const formatters = ["html", "css", "javascript", 'json', 'php', 'xml']
    const converters = [
        { from: "json", to: "csv" },
        { from: "json", to: "excel" },
        { from: "json", to: "xml" },
        { from: "json", to: "yaml" },
        { from: "", to: "" }]

    return (<>
        <Box>
            toolspage

            <Box className="flex-row formatter-tools">
                Code Formatters
                {formatters.map((e) => {
                    return <Box className="formatter-tool-card"> {e.toUpperCase()} Beautifier </Box>
                })}
            </Box>
            <Box className="flex-row conveter-tools">
                Code conveters
                {formatters.map((e) => {
                    return <Box className="conveter-tool-card"> {e.toUpperCase()} Conveters </Box>
                })}
                </Box>
        </Box>
    </>

    )
}
