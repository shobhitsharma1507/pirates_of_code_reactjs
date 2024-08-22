import { Box } from '@mui/material'
import React from 'react'
import './QuestionTypePage.css'
import QuestionTypeCard from '../../components/QuestionTypePage/QuestionTypeCard'
import MCQImage from '../../assets/images/MCQ.svg'
import BooleanImage from '../../assets/images/Boolean.svg'
import BlanksImage from '../../assets/images/BlanksImage.svg'


export default function QuestionTypePage({ category = "html" }) {

    return (
        <Box>
            <Box className="question-type-title">
                {category} Treasure
            </Box>
            <Box className="question-type-cards flex-row">
                <QuestionTypeCard category={category} imageUrl={MCQImage} />
                <QuestionTypeCard category={category} imageUrl={BooleanImage} />
                <QuestionTypeCard category={category} imageUrl={BlanksImage} />

            </Box>
        </Box>
    )
}
