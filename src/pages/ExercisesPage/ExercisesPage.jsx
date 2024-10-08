import { Box } from '@mui/material'
import React from 'react'
import ExerciseCard from '../../components/ExercisesPage/ExerciseCards'
import './ExercisesPage.css';
import Footer from '../../components/HomePage/Footer';

export default function ExercisesPage() {
  const categories = ["HTML", "CSS", "JavaScript", "React", "Next", "Node"]
  return (
    <>
      <Box className="flex-row exercise-cards" >
        {categories.map((e) =>
          <ExerciseCard category={e} />
        )}
      </Box>
      <Footer />
    </>
  )
}
