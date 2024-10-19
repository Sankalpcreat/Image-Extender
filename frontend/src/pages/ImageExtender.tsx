import React from 'react';
import AIImageExtender from '@/components/AIImageExtender';

const ImageExtenderPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-8">AI Image Extender</h1>
      <AIImageExtender />
    </div>
  );
};

export default ImageExtenderPage;
