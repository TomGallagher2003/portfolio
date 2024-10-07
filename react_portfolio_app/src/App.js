import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import Navbar from "./components/Navbar";
import ContactPage from "./components/ContactPage";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes sx={{backgroundColor: '#4abdac', color: 'white'}}>
              <Route path="/portfolio/" element={<Home />} />
              <Route path="/portfolio/projects/:id" element={<ProjectDetailsPage />} />
              <Route path="/portfolio/contact" element={<ContactPage />} />
          </Routes>
      </Router>
  );
}

export default App;
