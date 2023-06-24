import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';
import NavBar from './components/NavBar';

import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <NavBar/>
     
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/excercise/:id" element={<ExcerciseDetail/>}/>
</Routes>
<Footer/>
    </Box>
  );
}

export default App;
