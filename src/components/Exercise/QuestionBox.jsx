import { Box, Typography } from "@mui/material";
import QuestionBoxActions from "./QuestionBoxActions";
import "./QuestionBox.css";

function QuestionBox() {
    let qNo = 1;
    let ques = "Who developed React?";
    let options = ["Google", "Facebook", "Twitter", "Microsoft"];
    return (
        <Box className="quesbox-continer" bgcolor="background.quesBox">
            <Box className="question-box-inner">
                <Box className="questionBox-header"></Box>
                <Box >
                    <Box> Question {qNo}:</Box>
                    <Box>
                        <Typography>Who developed React?</Typography>
                    </Box>
                    <Box>
                        {options.map((e, i) => (
                            <>
                                <Typography>
                                    <input type="checkbox"></input>
                                    {e}
                                </Typography>
                            </>
                        ))}
                    </Box>
                </Box>
                <Box className="questionBox-filter"></Box>

                <Box className="questionBox-tags"></Box>
            </Box>
            <QuestionBoxActions />
        </Box>
    );
}

export default QuestionBox;
