import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server runing at ${process.env.PORT}`);
});
