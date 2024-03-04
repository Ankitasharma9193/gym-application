import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack 
        type="button"
        alignItems='center'
        justifyContent='center'
        className="bodyPart-card"
        sx = {{
            borderTop: item === bodyPart ? '4px solid #ff2625' : '',
            background: '#fff',
            borderBottomLeftRadius: '20px', 
            width: '270px', 
            height: '140px', 
            cursor: 'pointer', 
            gap: '47px' 
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          }}
        >
        <img src={Icon} style={{ width:'40px', height:'40px' }}></img>
        <Typography fontSize='24px' fontWeight='bold' fontFamily='Alegreya' textTransform='capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart;