import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import LandingPage from './pages/index';
import SignupPage from './pages/SignupPage';
import ImageExtenderPage from './pages/ImageExtender';

// Import your global styles
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Set up routing for your pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/image-extender" element={<ImageExtenderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
