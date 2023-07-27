import React ,{useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [bodypart,setBodypart]=useState('all')
  const [exercises,setExercises]=useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises}
      bodyPart={bodypart} setBodyPart={setBodypart} />
      <Exercises  
      setExercises={setExercises}
      bodyPart={bodypart} setBodyPart={setBodypart} />
    </Box>
  )
};

export default Home;
