import { Box, Typography } from "@mui/material";
import React from "react";
import "./SidebarRight.css"

const SidebarRight = () => {
    const quesCount = Array.from({ length: 40}, (_, i) => (i + 1).toString());
    return (
        <Box
            className="sidebar-container"
            bgcolor="background.sidebar"
            color="text.main"
        >
            <Box className="sidebar-title flex-row" bgcolor="background.sidebarTitle">
                <h3>Questions</h3>
            </Box>
            <Box className="sidebar-question-count-box flex-row">
                {quesCount.map((e, i) => (
                    <Box className="sidebar-question-count flex-row">
                        <Typography>{e}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SidebarRight;
