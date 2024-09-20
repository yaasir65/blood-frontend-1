import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from '../images/bloodCircel.mp4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:1000/login/user', {
      email,
      password: pass,
    })
    .then((res) => {
      if (res.data.error) {
        toast.error('Incorrect email or password');
      } else if (res.data.empty) {
        toast.warning('Please enter both email and password');
      } else {
        toast.success('Login successful');
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/');
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('An error occurred. Please try again later.');
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-center">
      <video className="w-full opacity-75 absolute" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password:</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserLogin;
