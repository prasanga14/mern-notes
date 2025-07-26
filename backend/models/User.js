import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationCode: String,

  isVerified: {
    type: Boolean,
    default: false,
  },
  notes: [],
});

const User = new mongoose.model('user', userSchema);

export default User;
