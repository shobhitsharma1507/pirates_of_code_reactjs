import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import WavePattern from "./WavePattern";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import "../../App.css";

export const MiddleSection = () => {
  const { theme } = useThemeContext();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      {/* Top Section */}
      <Box minHeight={isMediumScreen?"60vh":"auto"}>
        <Grid
          container
          spacing={20}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          p={"15% 10% 0 10%"}
          
        >
          {/* Code Block */}
          <Grid item md={6}>
            <Box
              bgcolor="black"
              color="white"
              p={4}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="300px"
            >
              <Typography>
                Code Block to Show of some Code hahahahahahahahahahaha
              </Typography>
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item md={6}>
            <Box >
              <Typography variant="title">Lorem Ipsum Tagline here</Typography>
              <br />
              <Typography variant="subtitle" mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero.
              </Typography>
              <br />
              <Button
                variant="contained"
                sx={{
                  marginTop: "5%",
                  backgroundColor: "#4E6084",
                  borderRadius: "40px",
                }}
              >
                Explore
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Wave Section */}
      
        <WavePattern />
      {/* Bottom Section */}
      <Box bgcolor="#B0C4DE" minHeight="80vh">
        <Grid
          container
          columnSpacing={20}
          rowSpacing={2}
          // flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          // marginTop={"10%"}
          p={"8% 10%"}
        >
          {/* <Grid item xs={12} md={12}>
              <Box height={"15vh"}></Box>
            </Grid> */}
          {/* Text Content */}
          <Grid item md={6} marginTop={"5%"}>
            <Box className="flex-row ">
              <Typography variant="title">Lorem Ipsum Tagline here</Typography>
              <br />
              <Typography variant="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero.
              </Typography>
              <br />
              <Button
                variant="contained"
                sx={{
                  marginTop: "4%",
                  backgroundColor: "#4E6084",
                  borderRadius: "40px",
                }}
              >
                Explore
              </Button>
            </Box>
          </Grid>

          {/* Tool Showcase */}
          <Grid item md={6}>
            <Box
              bgcolor="white"
              color="black"
              p={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="300px"
              // mb={"4%"}
            >
              <Typography>
                Some Random Tool Showcase that I have to create I guess
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
