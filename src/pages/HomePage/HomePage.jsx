import { Box, IconButton, InputBase, Paper, TextField } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import "./HomePage.css";
import { MiddleSection } from "../../components/HomePage/MiddleSection";
import Footer from "../../components/HomePage/Footer";

export const HomePage = () => {
  return (
    <>
      <Box height={"100vh"}>
        <Navbar />
        <Box
          bgcolor={"background.homepage"}
          height={"calc(100% - 80px)"}
          width={"100%"}
          className="flex-col"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box color={"text.main"} className="homepage-title">
            Explore and <br/>Learn
          </Box>
          <Box color={"text.main"} fontSize={"2rem"}>
            With our carefully Crafted tests
          </Box>
          <Paper
            className="search-bar"
            sx={{ backgroundColor: "text.main", borderRadius: "85px" }}
          >
            <Box width={"100%"} fontSize={"1rem"}>
              <InputBase sx={{ paddingLeft: "5%" }} />
            </Box>
            <IconButton
              sx={{ width: "10%" }}
              type="button"
              aria-label="search"
              size="large"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <MiddleSection />
        <Footer />
      </Box>
    </>
  );
};
