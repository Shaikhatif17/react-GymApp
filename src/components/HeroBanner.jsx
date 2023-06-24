import React from 'react';
import {Box ,Stack,Typography ,Button} from "@mui/material"
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{ lg:'212px',xs:'70px'},
    ml:{sm:'50px'}
   }} position='relative' p='20px'>
    <Typography color='#ff2625' 
    fontWeight='600' fontSize='26px'>
        Fitness club
    </Typography>

    <Typography fontWeight={700}
    sx={{fontSize:{lg:'44px', xs:'40px'}}}>
        Sweat,Smile<br/> And Repeat
    </Typography>
    <Typography fontSize='22px'
    lineHeight='35px'>
        check out the most effective exercises
    </Typography>
    <Button variant="contained" color='error'>Explore Exercises</Button>

   </Box>

  )
}

export default HeroBanner;
