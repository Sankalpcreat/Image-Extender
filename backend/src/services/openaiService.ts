import axios from 'axios';

export const extendImage = async (imageBuffer: Buffer) => {
  try {
  
    const response = await axios.post(
      'https://api.openai.com/v1/images/edits',
      {
        prompt: 'Extend background of  this image',
        image: imageBuffer.toString('base64'),
        size: '1024x1024',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

   
    return response.data;
  } catch (error) {
    throw new Error('Failed to extend the image using OpenAI API');
  }
};