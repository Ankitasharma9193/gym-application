import React, { useContext, useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import "react-horizontal-scrolling-menu/dist/styles.css";

import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
//import { fetchData, exerciseOptions } from '../utils/fetchData';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="left-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {

   // console.log(bodyPart); // data has all the body parts, bodyParts indicate if one is selected or not
  return (
    // this will work for exercise card(gif) and for bodypart also 
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {data.map((item) => (
            <Box
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
             {bodyPart ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}  /> : <ExerciseCard exercise={item}/> }
            </Box>
          ))}
        </ScrollMenu>
      );
}

export default HorizontalScrollbar;