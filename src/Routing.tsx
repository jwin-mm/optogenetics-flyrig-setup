import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RigInstructions from './pages/RigInstructions';
import Contact from './pages/Contact';
import Bill from './pages/Bill';

const Routing: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RigInstructions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </Router>
  );
};

export default Routing;
