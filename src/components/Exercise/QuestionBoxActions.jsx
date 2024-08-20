import { Box } from "@mui/material";
import './QuestionBoxActions.css'
function QuestionBoxActions({ ans, qNo, onSelectQuestion, selectedAns }) {
    const handleSubmit = () => {
        if (ans.every((e, i) => e == selectedAns[i]))
            return console.log("correct")
        return console.log(ans, selectedAns)
    }
    return (
        <Box className='question-actions-container flex-row'
            bgcolor="background.bottom" >
            <Box bgcolor="background.primaryBtn" color="text.button" className="question-actions-sideBtn question-actions-sideBtn-prev" onClick={() => onSelectQuestion(qNo - 1)} > Previous</Box>
            <Box className="action-box-mid">

                <Box className="flex-row action-box-timer" color="text.main">Time: 00:05:33</Box>
                <Box className="flex-row submit-button-box"  >

                    <Box onClick={() => handleSubmit()} className="flex-row submit-button" bgcolor="background.sumbitButton" color="text.button"  >Submit</Box>
                    <Box className="flex-row display-ans-button" bgcolor="background.sumbitButton" color="text.button" >Show Answer</Box>

                </Box>
            </Box>
            <Box bgcolor="background.primaryBtn" color="text.button" className="question-actions-sideBtn question-actions-sideBtn-next" onClick={() => onSelectQuestion(qNo + 1)}>Next</Box>
        </Box>
    )
}

export default QuestionBoxActions;