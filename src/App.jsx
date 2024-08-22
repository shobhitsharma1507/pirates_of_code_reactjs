import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Exercise } from "./pages/Exercise/Exercise";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import QuestionTypePage from "./pages/QuestionTypePage/QuestionTypePage";
import ExercisesPage from "./pages/ExercisesPage/ExercisesPage";
import { Navbar } from "./components/Navbar/Navbar";

const categories = [
  "html",
  "css",
  "javascript",
  "react",
  "next",
  "node",
]

const types = [{ key: "MCQ", value: "A" }, { key: "Boolean", value: "B" }, { key: "Blanks", value: "C" }]
function App() {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>

            <Route path="*" element={<HomePage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            {/* Example route for categories
            <Route path="/exercises/html" element={<QuestionTypePage category="html" />} />
            */}
            {categories.map((category, index) => (
              <Route
                key={index}
                path={"/exercises/" + category}
                element={<QuestionTypePage category={category} />}
              />
            ))}
            {/* 
            // Example route for question page
            <Route
                  path={"/exercises/html/mcq"}
                  element={<Exercise selectedCategory="html" selectedType="C" />}
                /> */}
            {categories.map((category, index) => (
              types.map((type, i) =>
                <Route
                  key={index * i}
                  path={"/exercises/" + category + "/" + type.key.toLocaleLowerCase()}
                  element={<Exercise selectedCategory={category} selectedType={type.value} />}
                />
              )))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
