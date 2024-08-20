import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2E353E",
        padding: "5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#FFFFFF",
        height: "50vh",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "353px",
            height: "270px",
            backgroundColor: "#BDC3C7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Logo
        </Box>
        <Typography variant="body2" align="left">
          K.R. Sons Apartments <br />
          Bajipur, Sector - 135, <br />
          Noida, Uttar Pradesh, India
        </Typography>
      </Box>

      {/* Center Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        fontSize="1.5rem"
        gap="1rem"
      >
        <Link href="#" underline="hover" color="inherit" >
          Home
        </Link>
        <Link href="#" underline="hover" color="inherit" >
          Exercises
        </Link>
        <Link href="#" underline="hover" color="inherit" >
          Contact Us
        </Link>
        <Link href="#" underline="hover" color="inherit" >
          Internships
        </Link>
        <Link href="#" underline="hover" color="inherit" >
          About Us
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Suggestions
        </Link>
      </Box>

      {/* Right Section */}
      <Box sx={{ width: "446px", height: "324px", backgroundColor: "#ECF0F1" }}>
        {/* This box is for the right image or content */}
      </Box>
    </Box>
  );
}

export default Footer;
