import React, { useState } from 'react';
import axios from 'axios';
import ImageUploader from './ImageUploader';

const AIImageExtender: React.FC = () => {
  const [extendedImage, setExtendedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null); 


const handleImageUpload = (file: File) => {
    setImageFile(file); // Store the uploaded file
  };

  const handleGenerateImage = async () => {
    if (!imageFile) return; // Prevent generating if no file is uploaded

    const formData = new FormData();
    formData.append('image', imageFile);

    setLoading(true);
    try {
      const response = await axios.post('/api/extend-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setExtendedImage(response.data.extendedImageUrl);
    } catch (error) {
      console.error('Error extending image', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-4">
    <ImageUploader onImageUpload={handleImageUpload} />
    {imageFile && (
      <button
        onClick={handleGenerateImage}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
    )}
    {loading && <p>Extending image, please wait...</p>}
    {extendedImage && (
      <img src={extendedImage} alt="Extended Image" className="w-full max-w-md mt-4" />
    )}
  </div>
  );
};

export default AIImageExtender;
