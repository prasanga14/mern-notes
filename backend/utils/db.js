import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected sucessfully');
  } catch (error) {
    console.log('error connecting the database');
  }
};

export default connectDB;
