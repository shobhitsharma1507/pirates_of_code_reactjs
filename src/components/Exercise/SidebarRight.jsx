import { Box, Typography } from "@mui/material";
import React from "react";
import "./SidebarRight.css"

const SidebarRight = ({ questions, onSelectQuestion }) => {
    // const quesCount = Array.from({ length: 40}, (_, i) => (i + 1).toString());
    return (
        <Box
            className="sidebar-container"
            bgcolor="background.sidebar"
            color="text.main"
        >
            <Box className="sidebar-title flex-row" bgcolor="background.sidebarTitle">
                Questions
            </Box>
            <Box className="sidebar-question-count-box flex-row">
                {questions.map((_, i) => (
                    <Box className="sidebar-question-count flex-row" bgcolor="background.main">
                        <Typography>{i + 1}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SidebarRight;
