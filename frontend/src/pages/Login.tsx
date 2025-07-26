import axios from 'axios';
import Header from '../components/Header';
import { BASE_URL } from '../utils/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      console.log('clicked');
      e.preventDefault();

      const response = await axios.post(`${BASE_URL}/api/user/login`, {
        email,
        password,
      });

      console.log(response.data);

      if (response.status === 200) {
        navigate('/dashboard');
        localStorage.setItem('isVerified', response.data.isVerified);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className=" h-100 flex flex-col items-center justify-center ">
        <h2 className="font-bold text-3xl">Login</h2>
        <form>
          <input
            className=" w-full m-4 p-4 border-2"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" w-full m-4 p-4 border-2"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-1/2 text-white bg-regal-blue ml-48 p-2 cursor-pointer rounded-4xl"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
