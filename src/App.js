import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Exercise } from "./pages/Exercise";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { ThemeProvider } from "@mui/material";
import './App.css'
function App() {
    const { theme } = useThemeContext();
    console.log(theme);
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="" element={<Exercise />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
