import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Home from './components/Home';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactPage";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/projects/:id" element={<ProjectDetailsPage />} />
                <Route path="/portfolio/contact" element={<ContactPage />} />
            </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
