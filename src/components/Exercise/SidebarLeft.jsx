import { Box } from "@mui/material";
import React from "react";
import "./SidebarLeft.css";

const SidebarLeft = ({ chapters, onSelectChapter }) => {

    return (
        <Box
            className="sidebar-container"
            bgcolor="background.sidebar"
            color="text.main"
        >
            <Box className="sidebar-title flex-row" bgcolor="background.sidebarTitle" >
                JavaScript
            </Box>
            <Box className="sidebar-items custom-scroll-bar">
                {chapters.map((e, i) => (
                    <Box className="sidebar-item flex-row" variant="h4">
                        <Box component="span" sx={{ cursor: 'pointer', display: 'inline' }}>
                            {e}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SidebarLeft;
