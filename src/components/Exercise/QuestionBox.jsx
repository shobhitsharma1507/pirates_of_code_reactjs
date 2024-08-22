import { Box } from "@mui/material";
import QuestionBoxActions from "./QuestionBoxActions";
import "./QuestionBox.css";
import BooleanQues from "./Types/BooleanQues";
import McqQues from "./Types/McqQues";
import filterDark from './../../assets/images/quesFilterDark.svg'
import filterLight from './../../assets/images/quesFilterLight.svg'
import hintDark from './../../assets/images/quesHintDark.svg'
import hintLight from './../../assets/images/quesHintLight.svg'
import QuesTag from './QuesTag'
import { useThemeContext } from '../../theme/ThemeContextProvider'
import { useEffect, useState } from 'react'
import BlankQues from './Types/BlankQues'

// let type = 'mcq'
// let tags = ['Basics', 'React', 'Intro']

function QuestionBox({ type, qNo, ques, onSelectQuestion }) {
  const [selectedAns, setSelectedAns] = useState([]);
  const { theme, mode } = useThemeContext();

  return (
    <Box
      className='quesbox-continer'
      bgcolor='background.main'
      color='text.main'
    >
      <Box className='flex-row questionBox-header'>
        <img
          src={mode === 'dark' ? filterDark : filterLight}
          alt='filterIconDark'
        ></img>
      </Box>
      <Box className='flex-col question-box-inner'>
        <Box>
          {type === 'A' && <McqQues qNo={qNo + 1} ques={ques} handleAns={setSelectedAns} />}
          {type === 'B' && <BooleanQues qNo={qNo + 1} ques={ques} handleAns={setSelectedAns} />}
          {type === 'C' && <BlankQues qNo={qNo + 1} ques={ques} handleAns={setSelectedAns} />}

        </Box>
      </Box>
      <Box className='flex-row questionBox-filter'>
        <img src={mode === "dark" ? hintDark : hintLight} alt='hintIcon'></img>
      </Box>

      <Box className='flex-row questionBox-tags' bgcolor='background.quesTag'>
        <Box component='span' sx={{ display: 'inline' }}>
          Tags:
        </Box>
        {ques.tags.map((e, _) => (
          <QuesTag tagName={e} />
        ))}
      </Box>
      <QuestionBoxActions ans={ques.answer} qNo={qNo} onSelectQuestion={onSelectQuestion} selectedAns={selectedAns} />
    </Box>
  )

}

export default QuestionBox;
