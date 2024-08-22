import { Box } from '@mui/material'
import React from 'react'
import ExerciseCard from '../../components/ExercisesPage/ExerciseCards'

export default function ExercisesPage() {
  const categories = ["HTML", "CSS", "JavaScript", "React", "Next", "Node"]
  return (
    <Box>
      {categories.map((e) =>
        <ExerciseCard category={e} />
      )}
    </Box>
  )
}
