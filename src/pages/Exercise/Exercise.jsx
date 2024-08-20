import React, { useState } from "react";
import { Container, Grid, Snackbar, Alert, Box } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import SidebarRight from "../../components/Exercise/SidebarRight";
import QuestionBox from "../../components/Exercise/QuestionBox";
import QuestionBoxActions from "../../components/Exercise/QuestionBoxActions";
import data from "../../data.json";
import './Exercise.css'
import SidebarLeft from "../../components/Exercise/SidebarLeft";

export const Exercise = () => {
    const [selectedCategory, setSelectedCategory] = useState("JavaScript");

    const [selectedChapter, setSelectedChapter] = useState("Variables");
    const currentCategory = data.categories[selectedCategory];
    const currentType = "MCQ"
    const questions =
        currentCategory?.[currentType]?.Chapters[selectedChapter]?.questions ||
        [];

    const handleSelectChapter = (chapter) => {
        setSelectedChapter(chapter);
    }

    const handleSelectQuestion = (index) => {
        console.log(index)
        // setSelectedQuestionIndex(index);
    };

    return (
        <Box className="exercise-page" >
            <Navbar />
            <Box className="flex-row exercise-container">
                <SidebarLeft
                    chapters={Object.keys(
                        data.categories[selectedCategory]?.MCQ?.Chapters ||
                        {}
                    )}
                    onSelectChapter={handleSelectChapter} />
                <QuestionBox />
                <SidebarRight
                    questions={questions}
                    onSelectQuestion={handleSelectQuestion}
                />
            </Box>
        </Box>
    )
}