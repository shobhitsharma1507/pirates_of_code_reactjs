<<<<<<< Updated upstream:src/pages/Exercise.jsx
import React, { useState } from "react";
import { Container, Grid, Snackbar, Alert, Box } from "@mui/material";
import { Navbar } from "../components/Navbar/Navbar";
import SidebarRight from "../components/Exercise/SidebarRight";
import QuestionBox from "../components/Exercise/QuestionBox";
import QuestionBoxActions from "../components/Exercise/QuestionBoxActions";
import data from "../data.json";
import './Exercise.css'
import SidebarLeft from "../components/Exercise/SidebarLeft";
=======
import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Navbar } from '../../components/Navbar/Navbar'
import SidebarRight from '../../components/Exercise/SidebarRight'
import QuestionBox from '../../components/Exercise/QuestionBox'
import data from '../../data.json'
import './Exercise.css'
import SidebarLeft from '../../components/Exercise/SidebarLeft'
>>>>>>> Stashed changes:src/pages/Exercise/Exercise.jsx

export const Exercise = ({
    selectedCategory = 'HTML',
    selectedType = 'C'  // A: MCQ, B: True-False, C: Blanks
}) => {
    // const [selectedCategory, setSelectedCategory] = useState("HTML");
    const [selectedChapter, setSelectedChapter] = useState('Basic Concepts')
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0)
    const currentCategory = data.categories.find(
        cat => cat.name === selectedCategory
    )

    const quesType = currentCategory.questionTypes.find(
        type => type.type === selectedType
    )


    const chapters = quesType.chapters.map(chapter => chapter.name)
    const questions = quesType.chapters.find(chapter => chapter.name === selectedChapter).questions

    console.log(selectedCategory, selectedChapter, questions);

    const handleSelectChapter = chapter => {
        setSelectedChapter(chapter)
        console.log(chapter)
    }

    const handleSelectQuestion = index => {
        console.log(index);
        setSelectedQuestionIndex(index);
    }

    return (
        <Box className='exercise-page'>
            <Navbar />
            <Box className='flex-row exercise-container'>
                <SidebarLeft
                    category={selectedCategory}
                    chapters={chapters}
                    onSelectChapter={handleSelectChapter}
                />
                <QuestionBox
                    type={selectedType}
                    qNo={selectedQuestionIndex}
                    ques={questions[selectedQuestionIndex]}
                    onSelectQuestion={setSelectedQuestionIndex}
                />
                <SidebarRight
                    questions={questions.length}
                    onSelectQuestion={handleSelectQuestion}
                />
            </Box>
        </Box>
    )
}
