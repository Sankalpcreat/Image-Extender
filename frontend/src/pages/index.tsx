import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../components/ui/button';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">AI Image Extender</h1>
      <p className="text-lg mb-6">Expand your images with AI in seconds.</p>
      <Link to="/signup">
        <Button variant="primary">Get Started</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
