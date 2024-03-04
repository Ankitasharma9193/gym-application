import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Typography, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart}) => {
  console.log('exercise component ~~~~', exercises)

  const [currentPage, setCurrentPage] = useState(1)
  const [exercisesPerPage] = useState(4)

  // we need only x no of exercises on page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    //console.log('current page value', value)
    setCurrentPage(value)
    //window.scrollTo({ top:2000, behavior:'smooth' })
  }

  useEffect(() => {
   
    const fetchExercisesData = async() => {
      let exerciseData = [];
        if(bodyPart === 'all'){
            exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
            exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        console.log('~~~ In the exercises ~~~~~~',exerciseData);
        
        setExercises([...exerciseData]);
    };
    
    fetchExercisesData();

  }, [ bodyPart ]);

  return (
    <Box id='exercises'
     sx={{ mt: { lg: '109px' } }} 
     mt="50px"
     p="20px"
    >
      <Typography 
        variant='h3'
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }} 
        mb="46px"
      >
         Showing Results
      </Typography>
      <Stack direction='row'
        sx= {{ gap: { lg: '107px', xs: '50px' }}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => 
          <ExerciseCard  key={index} exercise={exercise} />
        )}
      </Stack>

      <Stack>
        { exercises.length > 4 && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate} //behind the scene pagination pass the currentvalue of the page as value
            size="large"
          />
        )
        }
      </Stack>
    </Box>
  )
}

export default Exercises;