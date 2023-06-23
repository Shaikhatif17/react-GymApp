import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ExcerciseDetail from './pages/ExcerciseDetail';
import './App.css';

function App() {
  return (
    <Box width='400px'>
      <NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/excercise/:id" element={<ExcerciseDetail/>}/>
</Routes>
    </Box>
  );
}

export default App;
