import { Box, Button, Link, Typography } from "@mui/material";
import "./Navbar.css";
import ThemeSwitchBtn from "../../assets/images/ThemeSwitchBtn.svg";
import { useThemeContext } from "../../theme/ThemeContextProvider";

export const CustomList = ({ listData }) => {
  const { toggleThemeMode } = useThemeContext();

  return (
    <Box
      className="flex-row"
      justifyContent={"space-between"}
      width={"100%"}
      padding={"1%"}
      gap={"20px"}
    >
      <Box>
        <Link href="/" color="inherit" underline="none">
          <Typography>POC</Typography>
        </Link>
      </Box>
      <Box
        className="flex-row"
        // flexWrap={"nowrap"}
        width={"90%"} 
        justifyContent={"flex-end"}
        gap={"30px"}
      >
        <Box
          className="navbar-text"
          // mr={"8%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          {listData.map((item) => (
            <Link href={item.to} underline="hover" color="inherit" >

              <Typography key={item.page} className="nav-link">
                {item.page}
              </Typography></Link>
          ))}
        </Box>
        <Box className="nav-link" >
          <img onClick={() => toggleThemeMode()} src={ThemeSwitchBtn} />
        </Box>
        <Box className="btn-group">
          <Button className="custom-button">Login</Button>
          <Button className="custom-button">Signup</Button>
        </Box>
      </Box>
    </Box>
  );
};
