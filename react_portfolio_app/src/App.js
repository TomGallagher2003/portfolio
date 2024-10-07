import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetailsPage from './components/ProjectDetailsPage';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/portfolio/" element={<Home />} />
              <Route path="/portfolio/projects/:id" element={<ProjectDetailsPage />} />
          </Routes>
      </Router>
  );
}

export default App;
