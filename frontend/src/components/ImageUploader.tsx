import React, { useState } from 'react';

const ImageUploader: React.FC<{ onImageUpload: (file: File) => void }> = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };
  return (
    <div className='flex flex-col items-center'>
        {imagePreview && <img src={imagePreview} alt="Preview" className='w-full max-w-md mb-4'/>}
    <input type="file" accept='image/*' onChange={handleImageChange}/>
    </div>
  )

}
export default ImageUploader