import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Exercise } from "./pages/Exercise/Exercise";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
function App() {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/exercise" element={<Exercise />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
