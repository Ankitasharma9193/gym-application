import React from 'react';
import {Box, Typography, Stack} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
    console.log('in the similar exercise', targetMuscleExercises);
  return (
    <Box>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack direction='row' sx={{ p: '2', position:'relative' }}>
            {
                targetMuscleExercises.length !==0 ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader />
            }
        </Stack>

        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
        </Typography>
        <Stack direction='row' sx={{ p: '2', position:'relative' }}>
            {
                equipmentExercises.length !==0 ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader />
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises;