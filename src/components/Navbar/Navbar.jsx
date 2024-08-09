import { Box, Button } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import './Navbar.css'
import { CustomList } from "./CustomList";
import AppBar from "@mui/material/AppBar";

const data = ["Home", "Exercises", "Contact Us", "About Us"]

export const Navbar = () => {
  const { theme } = useThemeContext();

  return (
    <Box className="custom-navbar" bgcolor= "primary.navbar" color="text.main">
      <CustomList listData={data}></CustomList>
    </Box>
  );
};
