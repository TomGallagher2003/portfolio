import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes sx={{backgroundColor: '#4abdac', color: 'white'}}>
              <Route path="/portfolio/" element={<Home />} />
              <Route path="/portfolio/projects/:id" element={<ProjectDetailsPage />} />
          </Routes>
      </Router>
  );
}

export default App;
