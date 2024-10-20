import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import authRoutes from './routes/authRoutes';
import imageRoutes from './routes/imageRoutes';


dotenv.config();

const app = express();


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/image', imageRoutes);




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
