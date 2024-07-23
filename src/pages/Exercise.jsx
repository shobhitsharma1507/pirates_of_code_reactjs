import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar/Navbar";
import SidebarRight from "../components/Exercise/SidebarRight";
import './Exercise.css'
import SidebarLeft from "../components/Exercise/SidebarLeft";

export const Exercise = () => {
    return(
        <Box>
           <Navbar/>
           <Box className="flex-row exercise-container">
            <SidebarLeft/>
            <SidebarRight/>
           </Box>
        </Box>
    )
}