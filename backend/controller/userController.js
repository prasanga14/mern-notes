import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: 'All feilds are required' });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists)
      return res.status(400).json({ message: 'Email already exists' });

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      verificationCode,
    });

    await newUser.save();

    return res.status(200).json({ message: 'Account creation successfull' });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: 'Both feilds are required' });

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User doesnt exist' });

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: 'Incorrect email or password' });

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );

    const userId = user._id;

    const isVerified = user.isVerified;

    return res.status(200).json({
      message: 'Login sucessfull',
      token,
      userId,
      isVerified,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export { createUser, login };
