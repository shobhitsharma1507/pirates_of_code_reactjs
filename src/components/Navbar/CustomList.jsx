import { Box, Button, Typography } from "@mui/material";
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
      padding={"2%"}
    >
      <Box>
        <Typography>POC</Typography>
      </Box>
      <Box
        className="flex-row"
        flexWrap={"nowrap"}
        width={"80%"}
        justifyContent={"flex-end"}
      >
        <Box
          className="navbar-text"
          mr={"8%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          {listData.map((item) => (
            <Typography key={item} className="nav-link">
              {item}
            </Typography>
          ))}
        </Box>
        <Box className="nav-link" mx={"6%"}>
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
