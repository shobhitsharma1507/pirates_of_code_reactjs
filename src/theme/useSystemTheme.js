import { useEffect, useState } from "react";

const useSystemTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const darkThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkThemeMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkThemeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function getInitialTheme() {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDarkScheme ? "dark" : "light";
  }

  return theme;
};

export default useSystemTheme;
