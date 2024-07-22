import { Box, Button } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";

import AppBar from "@mui/material/AppBar";

export const Navbar = () => {
  const { theme } = useThemeContext();

  return (
    <Box className="custom-navbar" color= "background.sidebar">
      Hello
    </Box>
  );
};
