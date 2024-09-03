import { Box } from '@mui/material'
import React from 'react'
import './QuestionTypePage.css'
import QuestionTypeCard from '../../components/QuestionTypePage/QuestionTypeCard'
import MCQImage from '../../assets/images/MCQ.svg'
import BooleanImage from '../../assets/images/Boolean.svg'
import BlanksImage from '../../assets/images/BlanksImage.svg'
import Footer from '../../components/HomePage/Footer';


export default function QuestionTypePage({ category = "html" }) {

    return (<>
        <Box bgcolor="background.sidebarTitle" color="text.main">
            <Box className="question-type-title">
                {category.toUpperCase()} Treasure
            </Box>
            <Box className="question-type-cards flex-row">
                <QuestionTypeCard category={category} imageUrl={MCQImage} />
                <QuestionTypeCard category={category} imageUrl={BooleanImage} />
                <QuestionTypeCard category={category} imageUrl={BlanksImage} />

            </Box>
        </Box>
        <Footer />
    </>
    )
}
