import { Box, Typography } from "@mui/material";
import './QuestionBoxActions.css'
function QuestionBoxActions() {
    return (
        <Box className='question-actions-container flex-row'
            bgcolor="background.quesBoxActions" >
            <Box bgcolor="background.primaryBtn" color="text.button" className="question-actions-sideBtn question-actions-sideBtn-prev"> Previous</Box>
            <Box className="action-box-mid">

                <Box className="flex-row action-box-timer">Time: 00:05:33</Box>
                <Box className="flex-row submit-button-box"  >

                    <Box className="flex-row submit-button" bgcolor="background.sumbitButton" color="text.button"  >Submit</Box>
                    <Box className="flex-row display-ans-button" bgcolor="background.sumbitButton" color="text.button" >Show Answer</Box>

                </Box>
            </Box>
            <Box bgcolor="background.primaryBtn" color="text.button" className="question-actions-sideBtn question-actions-sideBtn-next" >Next</Box>
        </Box>
    )
}

export default QuestionBoxActions;