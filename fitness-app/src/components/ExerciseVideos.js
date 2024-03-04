import { Typography, Box, Stack } from '@mui/material';
import React from 'react'

const ExerciseVideos = ({ excerciseDetailVideos, name }) => {
    console.log('videos ~~~~~', excerciseDetailVideos);

  return (
    <Box sx={{ mt: { lg: '203px', xs: '20px' } }} p='20px'>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
             Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px'} }}
            justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        >
            { excerciseDetailVideos?.slice(0,5).map((item, index) => (
                <a
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                >
                <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                    <Typography sx={{ fontSize: { lg: '20px', xs: '10px' }, fontFamily: 'Raleway' }} fontWeight={600} color="#FFBD33">
                        {item.video.title}
                    </Typography>
                    <Typography sx={{ fontSize: { lg: '20px', xs: '10px' } }} fontWeight={600} color="#33FF57">
                        {item.video.channelName}
                    </Typography>
                </Box>
                </a>
            ))

            }
        </Stack>
    </Box>
  )
}

export default ExerciseVideos;