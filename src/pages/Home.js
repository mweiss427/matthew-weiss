// Home.js
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Technology from "../components/Areas/Technology";
import Books from "../components/Areas/Books";
import Health from "../components/Areas/Health";
import Curling from "../components/Areas/Curling";
import DevOps from "../components/Areas/DevOps";

function Home() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/books" element={<Books />} />
          <Route path="/health" element={<Health />} />
          <Route path="/curling" element={<Curling />} />
          <Route path="/devops" element={<DevOps />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default Home;
