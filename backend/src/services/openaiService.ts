import axios from 'axios';

export const extendImageBackground = async (imageBuffer: Buffer) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/edits',
      {
        image: imageBuffer.toString('base64'),
        prompt: 'Extend the background of this image',
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
    throw new Error('Failed to extend the image using OpenAI');
  }
};
