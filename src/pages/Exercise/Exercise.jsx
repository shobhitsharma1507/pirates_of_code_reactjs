import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import SidebarRight from '../../components/Exercise/SidebarRight'
import QuestionBox from '../../components/Exercise/QuestionBox'
import data from '../../data.json'
import './Exercise.css'
import SidebarLeft from '../../components/Exercise/SidebarLeft';
import axios from 'axios';

export const Exercise = ({
    selectedCategory = 'HTML',
    selectedType = 'mcq'  // A: MCQ, B: True-False, C: Blanks
}) => {

    const fetch_data = async () => {
        try {
            const response = await axios.get('https://pirates-of-code-backend.vercel.app/api/categories');
            // const response = await axios.get('http://localhost:5000/api/categories');
            console.log(response.data); // Log the fetched data
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetch_data();
        console.log(data.categories)

    }, [])


    // const [selectedCategory, setSelectedCategory] = useState("HTML");
    const [selectedChapter, setSelectedChapter] = useState('Basic Concepts')
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0)
    const currentCategory = data.categories.find(
        cat => cat.name.toLowerCase() === selectedCategory.toLowerCase()
    )
    console.log(data.categories[0].name);
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
        <Box className="exercise-page" >

            {/* <Navbar /> */}
            <Box className="flex-row exercise-container">
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