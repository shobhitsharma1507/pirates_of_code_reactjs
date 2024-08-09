import { Box, Input, Typography } from "@mui/material";
import QuestionBoxActions from "./QuestionBoxActions";
import "./QuestionBox.css";

let qNo = 1;
let ques = "Who developed React?";
let options = ["Google", "Facebook", "Twitter", "Microsoft"];

function QuestionBox() {
  return (
    <Box className="quesbox-continer" bgcolor="background.quesBox">
      <Box className="question-box-inner">
        <Box className="questionBox-header"></Box>
        <Box>
          <Box> Question {qNo}:</Box>
          <Box>
            <Typography>Who developed React?</Typography>
          </Box>
          <Box>
            {options.map((e, i) => (
              <Box>
                <Typography >
                  <Input type="checkbox"></Input>
                  {e}
                </Typography>
              </Box>
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
