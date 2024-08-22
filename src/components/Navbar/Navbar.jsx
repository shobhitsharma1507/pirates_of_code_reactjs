import { Box } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import './Navbar.css'
import { CustomList } from "./CustomList";

const data = [{ page: "Home", to: "/" }, { page: "Exercises", to: "/exercises" }, { page: "Contact Us", to: "/contact" }, { page: "About Us", to: "/about" }]

export const Navbar = () => {

  return (
    <Box className="custom-navbar" bgcolor="primary.navbar" color="text.main">
      <CustomList listData={data}></CustomList>
    </Box>
  );
};
