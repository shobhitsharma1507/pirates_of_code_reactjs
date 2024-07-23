import { Box } from "@mui/material";
import React from "react";
import "./SidebarLeft.css";

const SidebarLeft = () => {
    const chapters = [
        "Variables",
        "Control Flow",
        "Loops",
        "Operators",
        "Functions",
        "Events",
        "Array",
        "String",
        "Variables",
        "Control Flow",
        "Loops",
        "Operators",
        "Functions",
        "Events",
        "Array",
        "String",
        "Variables",
        "Control Flow",
        "Loops",
        "Operators",
        "Functions",
        "Events",
        "Array",
        "String",
    ];
    return (
        <Box
            className="sidebar-container"
            bgcolor="background.sidebar"
            color="text.main"
        >
            <Box className="sidebar-title flex-row" bgcolor="background.sidebarTitle" >
                <h3>JavaScript Exercises</h3>
            </Box>
            <Box className="sidebar-items custom-scroll-bar">
                {chapters.map((e, i) => (
                    <Box className="sidebar-item flex-row">
                        <h4>{e}</h4>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SidebarLeft;
