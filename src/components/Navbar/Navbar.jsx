import { Box, Button } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import './Navbar.css'
import AppBar from "@mui/material/AppBar";

export const Navbar = () => {
  const { theme } = useThemeContext();

  return (
    <Box className="custom-navbar" bgcolor= "primary.navbar" color="text.main">
      Hello
    </Box>
  );
};
