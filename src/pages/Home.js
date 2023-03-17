
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Technology from '../components/Technology';
import Books from '../components/Books';
import Health from '../components/Health';
import Curling from '../components/Curling';
import DevOps from '../components/DevOps';

function Home(){
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
     
        <Routes>
          <Route path="/technology" element={<Technology/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/health" element={<Health/>} />
          <Route path="/curling" element={<Curling/>} />
          <Route path="/devops" element={<DevOps/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
  }

export default Home;