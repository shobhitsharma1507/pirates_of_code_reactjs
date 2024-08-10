import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import WavePattern from "./WavePattern";

export const MiddleSection = () => {
  return (
    <Box>
      {/* Top Section */}
      <Box height={"70vh"}>
        <Grid
          container
          spacing={20}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          p={"10% 8%"}
        >
          {/* Code Block */}
          <Grid item xs={6}>
            <Box
              bgcolor="black"
              color="white"
              p={4}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="400px"
            >
              <Typography>
                Code Block to Show of some Code hahahahahahahahahahaha
              </Typography>
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item xs={6}>
            <Box width={"80%"}>
              <Typography variant="title">Lorem Ipsum</Typography>
              <br />
              <Typography variant="title">Tagline here</Typography>
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
      <Box bgcolor= "#B0C4DE" pb = {4}>
        <Box height={"80vh"}>
          <Grid
            container
            spacing={4}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            px={"8%"}
          >
            <Grid item xs={12} md={12}>
              <Box height={"15vh"}></Box>
            </Grid>
            {/* Text Content */}
            <Grid item xs={6}>
              <Box width={"80%"}>
                <Typography variant="title">Lorem Ipsum</Typography>
                <br />
                <Typography variant="title">Tagline here</Typography>
                <br />
                <Typography variant="subtitle" mt={8}>
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

            {/* Tool Showcase */}
            <Grid item xs={6}>
              <Box
                bgcolor="white"
                color="black"
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="400px"
              >
                <Typography>
                  Some Random Tool Showcase that I have to create I guess
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
