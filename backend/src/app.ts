// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);

export default app;
