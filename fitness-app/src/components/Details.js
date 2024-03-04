import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Details = ({ exerciseDetails }) => {
  console.log('in details !!!!!!',exerciseDetails)

  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetails;

  const extradetail = [
    {
        icon: BodyPartImage,
        name: bodyPart
    },

    {
        icon: TargetImage,
        name: target
    },

    {
        icon: EquipmentImage,
        name: equipment
    }
  ]
  
  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '10px', alignItems: 'center' }}>
        <img src={gifUrl} alt='exercise-gif' loading='lazy' className='detail-image'/>
        <Stack sx={{ gap: { lg: '60px', xs: '20px' } }}>
            <Typography variant='h4' fontWeight={400} textTransform="capitalize">
                {name}
            </Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                {instructions}
            </Typography>
            {extradetail.map((item) => (
                    <Stack direction='row' gap='25px' p='20px'>
                        <Button sx={{ borderRadius:'50%', width: '100px', height: '100px', background:'#FFF2DB'}}>
                            <img src={item.icon} style={{ width: '50px', height: '50px' }}/>
                        </Button>

                        <Typography textTransform='capitalize' sx={{ fontSize: {lg: '20px', xs:'20px' } }} textAlign='center'>
                            {item.name}
                        </Typography>
                    </Stack>
                )
            )}
        </Stack>

    </Stack>
  )
}

export default Details;