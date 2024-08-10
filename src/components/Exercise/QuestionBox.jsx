import { Box } from "@mui/material";
import QuestionBoxActions from "./QuestionBoxActions";
import "./QuestionBox.css";
import BooleanQues from "./BooleanQues";
import McqQues from "./McqQues";
import filterDark from './../../assets/images/quesFilterDark.svg'
import filterLight from './../../assets/images/quesFilterLight.svg'
import hintDark from './../../assets/images/quesHintDark.svg'
import hintLight from './../../assets/images/quesHintLight.svg'
import QuesTag from "./QuesTag";


let type = "mcq"
let tags = ["Basics", "React", "Intro"]

function QuestionBox() {

    return (
        <Box className="quesbox-continer" bgcolor="background.main" color="text.main">
            <Box className="flex-row questionBox-header">
                <img src={filterDark} alt="filterIconDark"></img>
            </Box>
            <Box className="flex-col question-box-inner">

                <Box >
                    {type === "bool" && <BooleanQues />}
                    {type === 'mcq' && <McqQues />}
                </Box>

            </Box>
            <Box className="flex-row questionBox-filter">
                <img src={hintDark} alt="hintIconDark"></img>
            </Box>

            <Box className="flex-row questionBox-tags" bgcolor="background.quesTag">
                <Box component="span" sx={{ display: 'inline' }}> Tags: </Box>
                {tags.map((e, _) => <QuesTag tagName={e} />)}
            </Box>
            <QuestionBoxActions />
        </Box>
    );
}

export default QuestionBox;
