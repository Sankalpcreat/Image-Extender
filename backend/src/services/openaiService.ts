import axios from 'axios';
import FormData from 'form-data';

export const extendImageBackground = async (imageBuffer: Buffer) => {
  try {
    const formData = new FormData();
    formData.append('image', imageBuffer, {
      filename: 'image.png', // Set a filename
      contentType: 'image/png', // Set the correct content type
    });
    formData.append('prompt', 'Extend the background of this image');
    formData.append('size', '1024x1024');

    const response = await axios.post(
      'https://api.openai.com/v1/images/edits',
      formData,
      {
        headers: {
          ...formData.getHeaders(), // Important: include form headers
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data; // Adjust based on what the API returns
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // If it's an Axios error, access the message
      throw new Error('Failed to extend the image using OpenAI: ' + error.message);
    } else {
      // For other types of errors
      throw new Error('Failed to extend the image using OpenAI: ' + String(error));
    }
  }
};