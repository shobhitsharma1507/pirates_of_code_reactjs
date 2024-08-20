import { Box } from "@mui/material";
import React from "react";
import "./SidebarLeft.css";

const SidebarLeft = ({ category, chapters = [], onSelectChapter }) => {
    // console.log(chapters)        

    return (
        <Box
            className="sidebar-container"
            bgcolor="background.sidebar"
            color="text.main"
        >
            <Box className="sidebar-title flex-row" bgcolor="background.sidebarTitle" >
                {category}
            </Box>
            <Box className="sidebar-items custom-scroll-bar">
                {chapters.map((e, i) => (
                    <Box onClick={(_) => onSelectChapter(e)} className="sidebar-item flex-row" variant="h4" key={i}>
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
