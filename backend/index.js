import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server runing at ${process.env.PORT}`);
});
