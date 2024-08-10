import { createTheme } from "@mui/material";
import React from "react";
import { getCustomTheme } from "./theme";
// import { store } from "store/store";
import useSystemTheme from "./useSystemTheme";

export const useColorTheme = () => {
    const [mode, setMode] = React.useState("dark");
    const customizeLi = { theme: "dark" };
    const { theme } = useSystemTheme();

    React.useEffect(() => {
        if (customizeLi?.theme === "system") {
            setMode(theme);
        } else if (customizeLi?.theme === "light") {
            setMode("light");
        } else if (customizeLi?.theme === "dark") {
            setMode("dark");
        } else {
            setMode("light");
        }
    }, []);

    const toggleThemeMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const newTheme = React.useMemo(
        () => createTheme(getCustomTheme(mode)),
        [mode]
    );

    return {
        theme: newTheme,
        mode,
        toggleThemeMode,
    };
};
