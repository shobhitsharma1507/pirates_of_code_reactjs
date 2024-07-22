// import useSystemTheme from "./useSystemTheme";
// import { useColorTheme } from "./useColorTheme";

const theme = {
  palette: {
    primary: {
      main: "#ff0000",
    },
  },
};

export const getCustomTheme = (mode) => ({
  typography: {
    fontFamily: "Inter, sans-serif",
    body1: {
      fontSize: "14px",
    },
  },
  palette: {
    ...(mode !== "light"
      ? {
          // palette values for the dark mode
          primary: {
            main: "#4E6084",
            navbar: "#4E6084",
          },
          background: {
            sidebar: "#465967",
            main: "#2E353E",
            bottom: "#3A4852",
          },
          text: {
            main: "#ffffff",
          },
          border: {
            main: "#4E4E4E",
          },
          hover: {
            primary: "#6a97b1",
          },
        }
      : {
          // palette values for the light mode
          primary: {
            main: "#4E6084",
            navbar: "#4E6084",
          },
          background: {
            sidebar: "#E2E2E2",
            main: "#F2F2F2",
            bottom: "#D0D9DF",
          },
          text: {
            main: "#000000",
          },
          border: {
            main: "#4E4E4E",
          },
          hover: {
            primary: "#6a97b1",
          },
        }),
  },
});

export default theme;
