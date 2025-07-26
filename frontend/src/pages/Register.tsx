import { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { BASE_URL } from '../utils/api';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(`${BASE_URL}/api/user/register`, {
        fullname,
        email,
        password,
      });

      if (response.status === 200) {
        setFullname('');
        setEmail('');
        setPassword('');
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className=" h-100 flex flex-col items-center justify-center mt-12">
        <h2 className="font-bold text-3xl">Register</h2>
        <form>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className=" w-full p-4 m-4 border-2"
            type="text"
            placeholder="Enter your Full name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-full p-4 m-4 border-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" w-full p-4 m-4 border-2"
            type="password"
            placeholder="Enter your password"
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

export default Register;
